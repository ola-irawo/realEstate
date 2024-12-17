import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['firebasestorage.googleapis.com', 'img.freepik.com', "example.com"], // Add the Firebase storage domain
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build
  },
};

export default nextConfig;
// output: "export"
