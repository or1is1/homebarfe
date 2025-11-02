import { getSession, signOutAction } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";
import Image from "next/image";

import "@/styles/googleSignInButton.css";
import Link from "next/link";
import NavigationButton from "../components/navigationButton";

export default async function Navigation() {
  const session = await getSession();

  return (
    <HydrateClient>
      <nav className="text-md sticky top-0 z-10 mx-auto flex w-full max-w-7xl items-center p-4">
        <div className="flex flex-1 items-center gap-1 rounded-2xl bg-pink-50/80 px-4 py-2">
          <Link href="/" className="shrink-0">
            <Image
              src="/favicon-96x96.png"
              alt="logo"
              width={32}
              height={32}
              className="cursor-pointer rounded-lg bg-blue-200 transition-opacity hover:opacity-80"
            />
          </Link>
          <NavigationButton href={"/ingredient"}>재료</NavigationButton>
          <NavigationButton href={"/inventory"}>보관함</NavigationButton>
          <NavigationButton href={"/recipe"}>레시피</NavigationButton>
          <NavigationButton href={"/bookmark"}>즐겨찾기</NavigationButton>
          <div className="flex flex-1" />
          {session ? (
            <NavigationButton onClick={signOutAction}>
              로그아웃
            </NavigationButton>
          ) : (
            <NavigationButton href={"/login"}>로그인</NavigationButton>
          )}
        </div>
      </nav>
    </HydrateClient>
  );
}
