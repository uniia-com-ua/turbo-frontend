export interface StrapiConfig {
  apiUrl: string;
  apiToken: string;
}

export interface StrapiError {
  status: number;
  name: string;
  message: string;
  details?: unknown;
}

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} environment variable is required`);
  }
  return value;
}

export class StrapiClient {
  private readonly config: StrapiConfig;

  constructor(config: StrapiConfig) {
    this.config = config;
  }

  public async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.apiUrl.replace(/\/$/, "")}/api${endpoint}`;

    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 10000);

    const baseInit: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.config.apiToken}`,
        ...options.headers,
      },
      signal: abortController.signal,
    };
    // Allow Next.js-specific caching options without typing them in library
    if ((options as any)?.next) {
      (baseInit as any).next = (options as any).next;
    }

    const response = await fetch(url, baseInit).finally(() => clearTimeout(timeoutId));

    let data: any = null;
    try {
      data = await response.json();
    } catch {
      // ignore json parse error
    }

    if (!response.ok) {
      const error: StrapiError = {
        status: response.status,
        name: data?.error?.name || "StrapiError",
        message: data?.error?.message || `HTTP ${response.status}: ${response.statusText}`,
        details: data?.error?.details || null,
      };
      throw error;
    }

    return data as T;
  }
}

let cachedClient: StrapiClient | null = null;

export function getStrapiClient(): StrapiClient {
  if (cachedClient) return cachedClient;
  const apiUrl = assertEnv("STRAPI_API_URL", process.env.STRAPI_API_URL);
  const apiToken = assertEnv("STRAPI_API_TOKEN", process.env.STRAPI_API_TOKEN);
  cachedClient = new StrapiClient({apiUrl, apiToken});
  return cachedClient;
}
