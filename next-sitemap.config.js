// Next-sitemap plugin configuration docs:
// https://www.npmjs.com/package/next-sitemap

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  generateIndexSitemap: false,
  siteUrl: process.env.NEXT_PUBLIC_URL || 'https://example.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  }
}