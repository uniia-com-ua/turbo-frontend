// Strapi API Types for Strapi 5

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

export interface StrapiEntity {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale?: string;
}

// Додаємо утиліту, що гарантує наявність core-полів і прибирає дублікати
type WithEntity<T> = Omit<
  T,
  "id" | "documentId" | "createdAt" | "updatedAt" | "publishedAt" | "locale"
> &
  StrapiEntity;

// Карта блоків CMS → типи
export interface CMSBlockMap {}

// Автогенеровані типи, які ми будемо обгортати через WithEntity
import type {
  CMSBlockMapGenerated,
  Global as GeneratedGlobal,
  HomePage as GeneratedHomePage,
  Article as GeneratedArticle,
  Author as GeneratedAuthor,
  Category as GeneratedCategory,
} from "./generated";

// Дискримінований union для dynamic zone
export type BlockComponent = (CMSBlockMap & CMSBlockMapGenerated)[keyof (CMSBlockMap &
  CMSBlockMapGenerated)];

// Global single type (merge generator shape with StrapiEntity core fields)
export type Global = WithEntity<GeneratedGlobal>;

// Home Page single type: уточнюємо Blocks як масив дискримінованих компонентів
export type HomePage = WithEntity<Omit<GeneratedHomePage, "Blocks"> & {Blocks: BlockComponent[]}>;

// (за потреби) Collection types
export type Article = WithEntity<GeneratedArticle>;
export type Author = WithEntity<GeneratedAuthor>;
export type Category = WithEntity<GeneratedCategory>;

// API response types
export type HomePageResponse = StrapiResponse<HomePage>;
export type GlobalResponse = StrapiResponse<Global>;

// Strapi API client configuration (re-export type for convenience)
export type {StrapiConfig, StrapiError} from "./client";
export type {AppBar} from "./generated";
export type {InfoBannerBlock, Button, MediaFile} from "./generated";
