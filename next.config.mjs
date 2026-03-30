/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables statically exporting the application into the `/out` directory required for GitHub Pages
  output: "export",
  // GitHub Pages cannot run the Next.js image optimization server, so we must output raw images
  images: {
    unoptimized: true,
  },
  // NO basePath needed as this site is hosted at the root (tanchu1234.github.io)
  // basePath: "/repo-name",
};

export default nextConfig;
