import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Створюємо еквівалент __dirname для ES модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname, "../../")
};

export default nextConfig;
