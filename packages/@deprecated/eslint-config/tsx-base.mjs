import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import path from "node:path";
import eslintPluginTs from "typescript-eslint";

import prettierConfig from "./prettier.config.mjs";

const project = path.resolve(process.cwd(), "tsconfig.json");

/**
 * @type {any[]}
 */
const ts = eslintPluginTs.configs.recommended;

/**
 * @type {import("eslint").Linter.FlatConfig}
 */
const prettier = eslintConfigPrettier;

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 **/
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
      parserOptions: {
        project,
      },
    },
    rules: {
      "prettier/prettier": ["warn", prettierConfig],
      "@typescript-eslint/ban-types": [
        "warn",
        {
          extendDefaults: true,
          types: {
            "{}": false,
          },
        },
      ],
    },
  },
];
