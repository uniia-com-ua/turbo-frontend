"use client";
import {Page} from "@uniia/ui/components/landing/Page";
import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <Page
      banner_title={t("banner.title")}
      banner_subtitle={t("banner.description")}
      logoImage="/logo/app_icon.png"
      bannerImage="/main_image.webp"
    />
  );
}
