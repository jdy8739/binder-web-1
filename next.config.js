const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss"; @import "styles/_extensions.scss";`,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },
  async rewrites() {
    return [
      {
        source: "/proxy/:path*",
        destination: "http://184.72.112.204:8080/:path*"
      }
    ]
  }
};

module.exports = nextConfig;
