import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginTs from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...eslintPluginTs.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
];
