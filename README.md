# Next.js with Docker for EasyPanel

[![StandWithUkraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://github.com/vshymanskyy/StandWithUkraine) &nbsp; 
[![Github Badge](https://img.shields.io/github/followers/digitalandyeu?label=@digitalandyeu&style=social)](https://www.github.com/digitalandyeu)

Next.js starter with docker built for [EasyPanel](https://easypanel.io). 
Built on official docker example with some additional fixes and improvements.
**Supports all Next.js features!**

- [EasyPanel configuration guide](https://gist.github.com/andriilive/38e0c30ad0e68e01d0bfc5250998de50) step-by-step guide with screenshots. 
- Utilizes next `standalone` output
- Supports `public` directory and **images optimization**
- Plugin `next-sitemap` implementation example
- Custom `middleware.ts` example
- Some **API routes** examples
- **Dark mode** example components (draft) 

## Local development

If needed, you can create the `.env.local` file with the following content:

```dotenv
NEXT_PUBLIC_DOMAIN=localhost:3000
NEXT_PUBLIC_URL=http://$NEXT_PUBLIC_DOMAIN
```

### Run in docker locally

To build the docker image, then run the docker container, use the following commands:

```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

**Common issues** and solutions for MacOS M1 platform with docker desktop:

```bash
# Rebuild the image without cache
docker build --no-cache -t nextjs-docker 

# Fix permissions
sudo chown -R $(whoami) ~/.docker
```

## EasyPanel configuration guide

Short guide for safe, zero downtime **git deployments** with EasyPanel. The **step-by-step guide with screenshots** is available 

👉🏻 [Next.js with Docker at EasyPanel gist](https://gist.github.com/andriilive/38e0c30ad0e68e01d0bfc5250998de50)

### Environment variables

Add the following environment variables to your `Environment` section.

```dotenv
# https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
NEXT_PUBLIC_DOMAIN=next.digitalandy.eu
NEXT_PUBLIC_URL=https://$NEXT_PUBLIC_DOMAIN
PORT=3000
```

---

## Cheatsheet

Other useful commands, for managing the Next.js server.

**npm scripts** from `package.json`:

```json
{
  "serve:old": "next start",
  "clean": "[[ -d ./.next ]] && rm -rf ./.next || echo \".next directory not found\"",
  "export:public": "[[ -d ./public ]] && cp -r ./public ./.next/standalone || echo \"public directory not found\"",
  "export:static": "[[ -d ./.next/static ]] && cp -r ./.next/static ./.next/standalone/.next || echo \".next/static directory not found\"",
  "export": "npm-run-all export:*"
}
```

**Read** see official documentation for detailed information / explanations.  

- [next.js docker example](https://github.com/vercel/next.js/blob/canary/examples/with-docker)
- [EasyPanel next guide](https://easypanel.io/docs/quickstarts/nextjs)
- [Next + docker](https://nextjs.org/docs/app/building-your-application/deploying#docker-image)
- [standalone output](https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files)

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
