import {getStrapiClient} from "../client";
import {HomePageResponse} from "../types";

export const getHomePage = async (
  locale?: string,
  init?: RequestInit,
): Promise<HomePageResponse> => {
  const params = new URLSearchParams();
  params.append("populate[Blocks][populate]", "*");
  if (locale) params.append("locale", locale);

  const queryString = params.toString();
  const endpoint = `/home-page${queryString ? `?${queryString}` : ""}`;

  const client = getStrapiClient();
  return client.request<HomePageResponse>(endpoint, init);
};
