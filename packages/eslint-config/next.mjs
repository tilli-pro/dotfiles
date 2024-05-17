import "eslint-plugin-only-warn";
import path from "node:path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import eslintPluginTs from "typescript-eslint";

const project = path.resolve(process.cwd(), "tsconfig.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import("eslint").Linter.Config} */
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
  },
];

// const old = {
//   extends: [
//     "eslint:recommended",
//     "prettier",
//     require.resolve("@vercel/style-guide/eslint/next"),
//     "eslint-config-turbo",
//   ],
//   globals: {
//     React: true,
//     JSX: true,
//   },
//   env: {
//     node: true,
//   },
//   plugins: ["only-warn"],
//   settings: {
//     "import/resolver": {
//       typescript: {
//         project,
//       },
//     },
//   },
//   ignorePatterns: [
//     // Ignore dotfiles
//     ".*.js",
//     "node_modules/",
//   ],
//   overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
// };
