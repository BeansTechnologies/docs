/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withNextra = require('nextra')('nextra-theme-docs', './theme.config.jsx')

module.exports = withNextra(nextConfig)
