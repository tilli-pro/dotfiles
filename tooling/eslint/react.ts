import reactPlugin from "eslint-plugin-react";
import googleTranslatePlugin from "eslint-plugin-react-google-translate";
import hooksPlugin from "eslint-plugin-react-hooks";
// import sayariPlugin from "@sayari/eslint-plugin";
import tilliProPlugin from "./plugin/index.js";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      // "@sayari": sayariPlugin,
      "@tilli-pro": tilliProPlugin,
      "react-google-translate": googleTranslatePlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      // ...sayariPlugin.configs.recommended.rules,
      ...tilliProPlugin.configs.recommended.rules,
      /** react-google-translate */
      ...{
        "react-google-translate/no-conditional-text-nodes-with-siblings":
          "error",
        "react-google-translate/no-return-text-nodes": "error",
      },
    },
    languageOptions: {
      globals: {
        React: "writable",
      },
    },
  },
] as Awaited<import("typescript-eslint").Config>;
