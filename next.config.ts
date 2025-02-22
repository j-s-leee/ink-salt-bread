import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "blogpfthumb.phinf.naver.net",
      },
    ],
  },
};

export default nextConfig;
