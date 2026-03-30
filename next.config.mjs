/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = isGithubActions ? process.env.GITHUB_REPOSITORY.split('/')[1] : "";
const basePath = repo && !repo.endsWith('.github.io') ? `/${repo}` : "";

const nextConfig = {
  // Enables statically exporting the application into the `/out` directory required for GitHub Pages
  output: "export",
  // GitHub Pages cannot run the Next.js image optimization server, so we must output raw images
  images: {
    unoptimized: true,
  },
  // Automatically set the base path for GitHub Pages based on the repository name if in CI
  basePath: basePath,
  // Expose basePath to client-side code for <img> src prefixing
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
