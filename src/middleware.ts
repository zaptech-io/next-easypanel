import type {MiddlewareMatcher} from "next/dist/build/analysis/get-page-static-info";
import {type MiddlewareConfig, type NextRequest, NextResponse} from 'next/server'

const allowedOrigins = [
  'https://acme.com',
  process.env.NEXT_PUBLIC_URL,
]

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// This function can be marked `async` if using `await` inside
// https://nextjs.org/docs/app/api-reference/file-conventions/middleware
export function middleware(request: NextRequest) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? ''
  const isAllowedOrigin = allowedOrigins.includes(origin)

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS'

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && {'Access-Control-Allow-Origin': origin}),
      ...corsOptions,
    }
    return NextResponse.json({}, {headers: preflightHeaders})
  }

  // Handle simple requests
  const response = NextResponse.next()

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // base URL of the middleware
  const baseUrl = new URL(request.url).origin

  response.cookies.set('middleware-url', baseUrl)

  return response
}

// Example of a custom matcher
const _apiMatcher: MiddlewareMatcher = {
  originalSource: '/api/*',
  regexp: '^/api/(.*)',
  locale: false,
  has: [
    {type: 'header', key: 'Authorization', value: 'Bearer Token'},
    {type: 'query', key: 'userId', value: '123'},
  ],
  missing: [{type: 'cookie', key: 'session', value: 'active'}],
}

// https://nextjs.org/docs/app/api-reference/file-conventions/middleware#config-object-optional
export const config: MiddlewareConfig = {
  matcher: [
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    // Default matcher:
    // match all request paths except for the ones starting with:
    // api (API routes), _next/static (static files), _next/image (image optimization files), favicon.ico, sitemap.xml, robots.txt (metadata files)
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|humans.txt).*)'
  ],
}