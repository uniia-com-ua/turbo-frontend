import { nextJsConfig } from "@uniia/eslint-config/next-js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    files: ["app/components/BlockRenderer.tsx", "lib/blocks/registry.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
