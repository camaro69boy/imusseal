import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_COUNTRIES = new Set(["CN"]);

export function proxy(request: NextRequest) {
  const country = request.headers.get("x-vercel-ip-country");

  if (country && BLOCKED_COUNTRIES.has(country)) {
    return new NextResponse("Access unavailable.", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"],
};