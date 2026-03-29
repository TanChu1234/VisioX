import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enables statically exporting the application into the `/out` directory required for GitHub Pages
  output: "export",
  // GitHub Pages cannot run the Next.js image optimization server, so we must output raw images
  images: {
    unoptimized: true,
  },
  // UNCOMMENT the following line if your site will be hosted at https://username.github.io/repo-name
  // basePath: "/repo-name",
};

export default nextConfig;
