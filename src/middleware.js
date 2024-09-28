import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request) {
  // Check if the request is a GET request to the root path
  if (request.nextUrl.pathname === '/' && request.method === 'GET') {
    // Perform the 302 redirect
    return NextResponse.redirect(new URL('http://127.0.0.1:8000', request.url), 302);
  }
  
  // Allow the request to continue if not matching
  return NextResponse.next();
}

// Define the paths for which this middleware should run
export const config = {
  matcher: '/', // This will run the middleware for the root path
};