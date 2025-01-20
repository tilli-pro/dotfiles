/**
 * @typedef {import('prettier').Config} BaseConfig
 * @typedef {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} ImportsConfig
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindConfig
 */
/**
 * @type {BaseConfig & ImportsConfig & TailwindConfig}
 **/
const config = {
  bracketSpacing: true,
  singleQuote: false,
  jsxSingleQuote: false,

  plugins: [
    // TODO: figure out if the ianvs plugin version of this is truly better or not
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // import order plugin config
  importOrder: [
    "<BUILTIN_MODULES>",
    "^react$", // React imports
    "^next[/].*$", // Nextjs imports
    "<THIRD_PARTY_MODULES>", // Third-party modules
    "@[.*]/(.*)$", // Repo package imports
    "~/(.*)$", // Absolute imports
    "^[./]", // Relative imports
    "<TYPES>^[.]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators"],

  // tailwind plugin config
  tailwindFunctions: ["clsx", "cx", "cn"],
  tailwindAttributes: ["className", "ClassName", "*ClassName"],
};

// TODO: create some default import order configs

/**
 * 
 * @param {string[]} order 
 * @returns {import("eslint").Linter.FlatConfig}
 */
export const importOrder = (order) => ({
  rules: {
    "prettier/prettier": ["warn", {
      ...config,
      importOrder: [
        ...order
      ]
    }],
  }
})

export default config;
