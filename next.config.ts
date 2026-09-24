import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    scrollRestoration: false,
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solutions",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/resources",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/resources/:slug*",
        destination: "/insights/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
