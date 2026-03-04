import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hela-landing",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
