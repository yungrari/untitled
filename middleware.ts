import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth');
  const response = NextResponse.next();

  if (request.geo?.latitude && request.geo?.longitude) {
    response.headers.set("x-latitude", request.geo.latitude);
    response.headers.set("x-longitude", request.geo.longitude);
  }

  if (request.nextUrl.pathname === '/') {
    return response;
  }

  if (!authCookie) {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('auth', 'required');
    return NextResponse.redirect(url);
  }

  return response;
}
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};