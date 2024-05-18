declare module "@tilli-pro/eslint-config/next.mjs" {
  type LintConfig = import("typescript-eslint").Config;
  declare const next: LintConfig;
  export default next;
}
