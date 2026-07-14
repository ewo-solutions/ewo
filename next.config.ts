import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Slug migration: the service-pages design handoff renamed this slug.
    return [
      {
        source: "/services/pay-per-click-advertising",
        destination: "/services/ppc-advertising",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
