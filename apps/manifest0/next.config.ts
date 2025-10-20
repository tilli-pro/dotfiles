import createMdx from "@next/mdx";

const nextConfig = {
  pageExtensions: ["tsx", "md", "mdx"],
  turbopack: {},
  experimental: {
    allowDevelopmentBuild: true,
    preloadEntriesOnStart: true,
    appNavFailHandling: true,
    authInterrupts: true,
    browserDebugInfoInTerminal: {},
  },
  allowedDevOrigins: [],
  compiler: {
    reactRemoveProperties: true,
  },
} satisfies import("next").NextConfig;

const withMdx = createMdx({});

// pnpm list -r --depth=-1 -j --only-projects

export default withMdx(nextConfig);
