import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shu-volunteer-laos",
  assetPrefix: "/shu-volunteer-laos/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
