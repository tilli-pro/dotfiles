import turboNext from "@tilli-pro/eslint-config/next.mjs";

/**
 * @type {import("eslint").Linter.FlatConfig[]}
 */
export default [
  ...turboNext,
  { ignores: [".next/*", "node_modules", ".next"] },
];
