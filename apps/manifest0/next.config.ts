import createMdx from "@next/mdx";

const nextConfig = {
  pageExtensions: ["tsx", "md", "mdx"],
  turbopack: {},
  experimental: {
    preloadEntriesOnStart: true,
    appNavFailHandling: true,
    authInterrupts: true,
    browserDebugInfoInTerminal: {},
    ...(process.env.NODE_ENV === "development"
      ? { allowDevelopmentBuild: true }
      : {}),
  },
  allowedDevOrigins: [],
  compiler: {
    reactRemoveProperties: true,
  },
} satisfies import("next").NextConfig;

const withMdx = createMdx({});

// pnpm list -r --depth=-1 -j --only-projects

export default withMdx(nextConfig);
