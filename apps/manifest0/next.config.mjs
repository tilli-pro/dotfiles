import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
