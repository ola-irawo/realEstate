import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Perform actions with the incoming request
  console.log(`Middleware triggered for: ${request.url}`);
  console.log(request.nextUrl.pathname, "next");

  const propertyTypes = ["sale", "rent", "shortlet"];

  // Extract query parameter `type`
  const queryType = request.nextUrl.searchParams.get('propertyType');

  if (queryType && !propertyTypes.includes(queryType)) {
    console.log(`Invalid property type: ${queryType}`);
    request.nextUrl.searchParams.set('propertyType', 'sale'); // Set query parameter to "sale"
    return NextResponse.redirect(request.nextUrl);
  }

  // Example: Redirect unauthorized users
  // const token = false;
  // const response  = NextResponse.next()
  // console.log({response})
  // if (!token && request.nextUrl.pathname === ('/')) {
  //   return NextResponse.redirect(new URL('/about-us', request.url));
  // }

  // // Continue to the requested page
  // return NextResponse.next();
}

export const config = {
  matcher: "/property-listing"
}