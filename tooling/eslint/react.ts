import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import tilliProPlugin from "./plugin/index.js";
// import sayariPlugin from "@sayari/eslint-plugin";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      // "@sayari": sayariPlugin,
      "@tilli-pro": tilliProPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      // ...sayariPlugin.configs.recommended.rules,
      ...tilliProPlugin.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        React: "writable",
      },
    },
  },
] as Awaited<import('typescript-eslint').Config>;