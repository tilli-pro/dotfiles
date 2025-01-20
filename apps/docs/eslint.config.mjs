import baseConfig from "@tilli-pro/eslint-config/base";
import nextjsConfig from "@tilli-pro/eslint-config/nextjs";
import reactConfig from "@tilli-pro/eslint-config/react";
import storybookConfig from "@tilli-pro/eslint-config/storybook";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...storybookConfig,
];
