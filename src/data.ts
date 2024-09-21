import package_json from './../package.json'

export const WEB_URL = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_URL : "http://localhost:3000"

export const AUTHOR = {
  name: package_json.author,
  email: "hi@digitalandy.eu",
  website: "https://digitalandy.eu",
  telegram: "https://t.me/digitalandy",
  from: "Prague, Czech Republic",
} as const

export const GITHUB_URL = package_json.homepage