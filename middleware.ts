import { NextResponse, type NextRequest } from 'next/server'

const PREVIEW_USER = 'nexa'
const PREVIEW_REALM = 'Nexa Rx Preview'

function isPreviewEnvironment() {
  return process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production'
}

function unauthorized() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${PREVIEW_REALM}", charset="UTF-8"`,
    },
  })
}

export function middleware(request: NextRequest) {
  if (!isPreviewEnvironment()) return NextResponse.next()

  const password = process.env.PREVIEW_PASSWORD
  if (!password) return NextResponse.next()

  const authorization = request.headers.get('authorization')
  if (!authorization?.startsWith('Basic ')) return unauthorized()

  const decoded = atob(authorization.slice(6))
  const separator = decoded.indexOf(':')
  const user = separator >= 0 ? decoded.slice(0, separator) : ''
  const pass = separator >= 0 ? decoded.slice(separator + 1) : ''

  if (user === PREVIEW_USER && pass === password) return NextResponse.next()

  return unauthorized()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|favicon.svg|apple-touch-icon.svg|robots.txt|sitemap.xml).*)'],
}
