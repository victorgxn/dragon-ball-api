import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dragonball-api.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
