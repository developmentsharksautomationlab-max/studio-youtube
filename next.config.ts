import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://studio-youtube.vercel.app/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
