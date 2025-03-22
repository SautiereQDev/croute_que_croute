import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.quentinsautiere.com"],
  },
  output: "standalone",
  basePath: process.env.BASE_PATH || "/croute_que_croute",
  assetPrefix: process.env.BASE_PATH || "/croute_que_croute",
};

export default nextConfig;
