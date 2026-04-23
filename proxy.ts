import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const adminRoutes = ["/admin"];

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key",
);

async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname == "/admin/login") return NextResponse.next();

  const isAdmin = adminRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  if (!isAdmin) return NextResponse.next();

  const token = request.cookies.get("auth-token")?.value;

  if (!token) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  let payload = null;
  try {
    payload = await verifyJWT(token);
  } catch {}

  if (!payload) {
    console.log("Not authorized by middleware");
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Paths to apply proxy
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"], // all routes except Next assets
};
