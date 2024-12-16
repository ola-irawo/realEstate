import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['firebasestorage.googleapis.com', 'img.freepik.com'], // Add the Firebase storage domain
  },
};

export default nextConfig;
