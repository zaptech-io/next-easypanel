// Next.js configuration docs:
// https://nextjs.org/docs/app/api-reference/next-config-js

/** @type {import('./src/types').Redirects} */
const redirects = [
  {
    source: "/api/humans",
    destination: "/humans.txt",
    permanent: true,
  }
]

/** @type {import('./src/types').Rewrites} */
const rewrites = [
  {
    source: "/humans.txt",
    destination: "/api/humans",
  },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: async () => redirects,
  rewrites: async () => rewrites,
};

export default nextConfig;
