/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
      ignoreDuringBuilds: true,
    },
    images: {
        domains: ['res.cloudinary.com','randomuser.me'],
      },
      experimental:{
        reactRoot: true,
        suppressHydrationWarning: true,
      }
}

module.exports = nextConfig
