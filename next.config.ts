import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.quentinsautiere.com"],
  },
  output: "export",
  basePath: "/croute_que_croute",
  assetPrefix: "/croute_que_croute",
};

export default nextConfig;
