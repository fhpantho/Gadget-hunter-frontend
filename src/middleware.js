import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("auth");

  // Protect dashboard routes
  if (!auth && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
