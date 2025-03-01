import type {Metadata} from "next";
import "./globals.css";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import {eUkraine} from "./fonts";
import {ThemeRegistry} from "./providers/ThemeRegistry";

export const metadata: Metadata = {
  title: "Унія",
  description: "Українська освітня платформа",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${eUkraine.className}`}>
        <AppRouterCacheProvider options={{key: "css"}}>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
