/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    dangerouslyAllowSVG: true,
    domains: ['api.dicebear.com'],
  }
}

module.exports = nextConfig
