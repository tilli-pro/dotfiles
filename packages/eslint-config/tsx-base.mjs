import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginTs from "typescript-eslint";

import prettierConfig from "./prettier.config.mjs";

/** @type {import("typescript-eslint").Config} */
export default [
  eslint.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    rules: {
      "prettier/prettier": ["warn", prettierConfig],
    },
  },
];
