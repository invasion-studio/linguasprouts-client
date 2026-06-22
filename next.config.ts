import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.tsx",
      },
    },
  },

  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3030";
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },

  redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/orders",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
