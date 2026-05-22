/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served as plain files on GitHub Pages.
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  // GitHub Pages can't run the Next.js image optimizer.
  images: { unoptimized: true },
  // Emit /path/index.html so direct links resolve on a static host.
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
