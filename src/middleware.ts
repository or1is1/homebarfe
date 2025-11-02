import { env } from "@/env";
import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

const matchersForAuth: string[] = ["/bookmark", "/inventory"];
const matchersForSignIn: string[] = ["/login", "/join"];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: env.AUTH_SECRET });
  console.log("token", token);

  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return token
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/login", request.url));
  }

  if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
    return token
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }

  return NextResponse.next();
}

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => pathname.startsWith(url));
}
