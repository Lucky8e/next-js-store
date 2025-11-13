import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "ouaqetknqcvosbvbspiy.supabase.co"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb" // increase limit from 1 MB to 10 MB
    }
  }
};

export default nextConfig;
