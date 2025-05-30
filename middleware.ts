// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'Unknown'
  // const response = NextResponse.next()
  // // Add country to response headers for server-side access
  // response.headers.set('x-user-country', country)
  // return response
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
