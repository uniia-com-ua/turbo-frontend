import type {Metadata} from "next";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {eUkraine} from "./fonts";
import {ThemeRegistry} from "./providers/ThemeRegistry";
import {NextIntlClientProvider} from "next-intl";
import {getLocale} from "next-intl/server";

export const metadata: Metadata = {
  title: "Унія",
  description: "Українська освітня платформа",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={`${eUkraine.className}`}>
        <AppRouterCacheProvider options={{key: "css"}}>
          <NextIntlClientProvider>
            <ThemeRegistry>{children}</ThemeRegistry>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
