import React, {lazy} from "react";
import type {InfoBannerProps} from "@uniia/ui/components/landing/Banner/Banner";

// Підтримувані UID блоків (додавати нові сюди)
export type BlockUID = "blocks.info-banner";

type RegistryEntry<Props> = {
  Component: React.LazyExoticComponent<React.ComponentType<Props>>;
  mapProps: (block: any) => Props;
};

// Реєстр доступних блоків. Ключ — UID блоку у Strapi
export const blockRegistry: Record<BlockUID, RegistryEntry<any>> = {
  "blocks.info-banner": {
    Component: lazy(() => import("@uniia/ui/components/landing/Banner/Banner")),
    mapProps: (block: any): InfoBannerProps => ({
      title: block?.title ?? "",
      subtitle: block?.subtitle ?? "",
      Buttons: block?.Buttons ?? [],
      background: block?.background,
    }),
  },
};
