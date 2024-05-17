import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import eslintPluginTs from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  eslint.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        React: true,
        JSX: true,
        ...globals.node,
      },
      // parserOptions: {
      //   project,
      // },
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
