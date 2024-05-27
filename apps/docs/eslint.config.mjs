import turboNext from "@tilli-pro/eslint-config/next.mjs";

export default [
  ...turboNext,
  { ignores: [".next/*", "node_modules", ".next"] },
];
