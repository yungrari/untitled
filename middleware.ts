import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // if (request.geo?.latitude && request.geo?.longitude) {
  //   const response = NextResponse.next()

  //   response.headers.set("x-latitude", request.geo.latitude)
  //   response.headers.set("x-longitude", request.geo.longitude)

  //   return response
  // }

  const authCookie = request.cookies.get('auth');
  
  // Allow access to the home page for all users
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }
  
  // For all other routes, check if the auth cookie is present
  if (!authCookie) {
    // If not, redirect to the home page with the "auth" query parameter
    const url = request.nextUrl.clone();
    url.pathname = '/';
    url.searchParams.set('auth', 'required');
    return NextResponse.redirect(url);
  }
  
  // If the auth cookie is present, allow the request to proceed
  return NextResponse.next();
}
 
// Specify which routes this middleware should run on
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