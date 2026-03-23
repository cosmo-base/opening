/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/opening',

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
