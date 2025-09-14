import type {MediaFile} from "./generated";

function isAbsoluteUrl(url: string): boolean {
  return /^https?:\/\//i.test(url);
}

function getAssetsBaseUrl(explicitBase?: string): string | undefined {
  const base =
    explicitBase ||
    // Публічні змінні для клієнта/сервера (статично інлайняться під час білду)
    process.env.NEXT_PUBLIC_STRAPI_ASSETS_URL ||
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    // Серверні фоли
    process.env.STRAPI_ASSETS_URL ||
    process.env.STRAPI_API_URL;
  if (!base) return undefined;
  return base.replace(/\/$/, "");
}

export interface ResolveMediaUrlOptions {
  size?: "thumbnail" | "small" | "medium" | "large";
  baseUrl?: string;
}

/**
 * Повертає абсолютний URL для медіа з Strapi. Якщо у `MediaFile.url` або у `formats[size].url` вже абсолютний URL —
 * повертає його як є. Інакше — префіксує базовим доменом: options.baseUrl → STRAPI_ASSETS_URL → STRAPI_API_URL.
 */
export function resolveMediaUrl(
  media?: MediaFile | null,
  options?: ResolveMediaUrlOptions,
): string | undefined {
  if (!media) return undefined;
  const chosen = (options?.size && (media as any)?.formats?.[options.size]?.url) || media.url;
  if (!chosen) return undefined;
  if (isAbsoluteUrl(chosen)) return chosen;
  const base = getAssetsBaseUrl(options?.baseUrl);
  if (!base) return chosen; // повертаємо відносний, якщо бази немає
  try {
    return new URL(chosen, `${base}/`).toString();
  } catch {
    return `${base}${chosen}`;
  }
}
