import type {Metadata} from "next";
import "./globals.css";
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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
