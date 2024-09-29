import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const protecetdRoutes = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware((auth, req) => {
  if (protecetdRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
