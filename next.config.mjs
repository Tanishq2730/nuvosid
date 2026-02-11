/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'export',   // 👈 IMPORTANT LINE

  images: {
    unoptimized: true,  // 👈 Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};



export default nextConfig;