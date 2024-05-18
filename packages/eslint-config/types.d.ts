declare module "@tilli-pro/eslint-config/next.mjs" {
  type LintConfig = import("typescript-eslint").Config;
  const next: LintConfig;
  export default next;
}
