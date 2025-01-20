/// <reference types="./types.d.ts" />

import * as path from "node:path";
import { includeIgnoreFile } from "@eslint/compat";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/** all packages that leverage @tilli-pro/env should use this rule */
export const restrictEnvAccess = tseslint.config(
  { ignores: ["**/{_,}env.{js,ts}"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    rules: {
      "no-restricted-properties": [
        "error",
        {
          object: "process",
          property: "env",
          message:
            "Use `import { env } from '~/_env'` instead to ensure validated types.",
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          name: "process",
          importNames: ["env"],
          message:
            "Use `import { env } from '~/_env'` instead to ensure validated types.",
        },
      ],
    },
  },
) as Awaited<import('typescript-eslint').Config>;

export default tseslint.config(
  /** ignore files not tracked by VCS + any config files */
  includeIgnoreFile(path.join(import.meta.dirname, "../../.gitignore")),
  { ignores: ["**/*.config.*"] },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    ignores: ["**/dist/**/*.js"],
    plugins: {
      import: importPlugin,
      turbo: turboPlugin,
      ...(!process.env.CI ? { prettier: prettierPlugin } : undefined), // disable in CI; we already handle prettier as a separate CI job ("test/format")
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      prettierConfig,
    ],
    rules: {
      ...turboPlugin.configs.recommended.rules,
      "@typescript-eslint/await-thenable": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/consistent-type-definitions": [
        /** @see https://stackoverflow.com/a/76352488 */
        "off",
        // "warn",
        // { nofix: true },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-base-to-string": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-empty-object-type": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-misused-promises": [
        "warn",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/no-redundant-type-constituents": "warn",
      "@typescript-eslint/no-unnecessary-condition": [
        "off", // "warn",
        {
          allowConstantLoopConditions: true,
        },
      ],
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/only-throw-error": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/restrict-plus-operands": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "no-constant-binary-expression": "warn",
      "no-constant-condition": ["warn", { checkLoops: false }],
      "no-empty-pattern": "warn",
      "prefer-const": "warn",
      ...(!process.env.CI
        ? {
            "prettier/prettier": [
              "warn",
              {
                ...(await import("@tilli-pro/prettier-config")).default,
              },
            ],
          }
        : undefined),
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { projectService: true } },
  },
) as Awaited<import('typescript-eslint').Config>;
