import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import "eslint-plugin-only-warn";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import path from "node:path";
import eslintPluginTs from "typescript-eslint";
import { fileURLToPath } from "url";

import prettierConfig from "./prettier.config.mjs";

const project = path.resolve(process.cwd(), "tsconfig.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("typescript-eslint").Config} */
export default [
  eslint.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  ...compat.plugins("@next/eslint-plugin-next"),
  ...compat.extends("eslint-config-turbo"),
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        ...globals.node,
      },
      parserOptions: {
        project,
      },
    },
    rules: {
      "prettier/prettier": ["warn", prettierConfig],
    },
  },
];
