import {getStrapiClient} from "../client";
import {GlobalResponse, AppBar} from "../types";

export const getGlobal = async (locale?: string, init?: RequestInit): Promise<GlobalResponse> => {
  const params = new URLSearchParams();
  // Explicit populate avoids forbidden keys like Media.related
  params.append("populate[0]", "appBar.Tabs");
  params.append("populate[1]", "appBar.LoginButton");
  params.append("populate[2]", "defaultSeo.shareImage");
  params.append("populate[3]", "favicon");
  if (locale) params.append("locale", locale);

  const queryString = params.toString();
  const endpoint = `/global${queryString ? `?${queryString}` : ""}`;

  const client = getStrapiClient();
  return client.request<GlobalResponse>(endpoint, init);
};

export const getAppBar = async (locale?: string, init?: RequestInit): Promise<AppBar | null> => {
  const global = await getGlobal(locale, init);
  console.log(global.data.appBar);
  return global.data.appBar ?? null;
};
