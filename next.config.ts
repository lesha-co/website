import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure headers for geolocation access
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-geo-enabled",
            value: "true",
          },
        ],
      },
    ];
  },
  // Configure redirects
  async redirects() {
    return [
      {
        source: "/cv.pdf",
        destination: "/cv",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
