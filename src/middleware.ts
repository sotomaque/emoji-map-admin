import { clerkMiddleware } from '@clerk/nextjs/server';

// Export the Clerk middleware
export default clerkMiddleware();

// Define the matcher for the middleware
export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
