export function importOrder(order: string[]): import("eslint").Linter.FlatConfig;
export default config;
export type BaseConfig = import('prettier').Config;
export type ImportsConfig = import('@ianvs/prettier-plugin-sort-imports').PrettierConfig;
export type TailwindConfig = import('prettier-plugin-tailwindcss').PluginOptions;
/**
 * @typedef {import('prettier').Config} BaseConfig
 * @typedef {import('@ianvs/prettier-plugin-sort-imports').PrettierConfig} ImportsConfig
 * @typedef {import('prettier-plugin-tailwindcss').PluginOptions} TailwindConfig
 */
/**
 * @type {BaseConfig & ImportsConfig & TailwindConfig}
 **/
declare const config: BaseConfig & ImportsConfig & TailwindConfig;
