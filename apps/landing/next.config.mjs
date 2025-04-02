import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import createNextIntlPlugin from 'next-intl/plugin';

// Створюємо еквівалент __dirname для ES модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../")
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
