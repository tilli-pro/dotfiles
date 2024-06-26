
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintConfigPrettier from "eslint-config-prettier";
import "eslint-plugin-only-warn";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
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


/**
 * TODO: FIGURE OUT HOW TO DEAL WITH THIS
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
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "error",
    },
    ignores: [".next/*", "node_modules", ".next"],
  },
  ...compat.extends("eslint-config-turbo"),
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
    ignores: [".next/*", "node_modules", ".next"],
  },
];
