import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import eslintPluginTs from "typescript-eslint";

import prettierConfig from "./prettier.config.mjs";

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
const prettier = eslintConfigPrettier;

/**
 * @type {import("eslint").Linter.FlatConfig & { [Symbol.iterator]: () => any }}
 */
const ts = eslintPluginTs.configs.recommended;

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended,
  ...ts,
  eslintPluginPrettier,
  prettier,
  {
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        ...globals.node,
      },
    },
    rules: {
      "prettier/prettier": ["warn", prettierConfig],
    },
    ignores: [
      // Ignore dotfiles
      ".*.js",
      "node_modules/",
      // Ignore build files
      "dist/",
      "build/",
      "out/",
    ],
  },
];
