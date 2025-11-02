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
      <nav className="sticky top-0 z-1 mx-auto flex w-full max-w-7xl min-w-xs items-center justify-center p-4 text-lg">
        <div className="flex flex-1 gap-x-4 rounded-2xl bg-pink-50/80 p-4">
          <Link href="/">
            <Image
              src="/favicon-96x96.png"
              alt="logo"
              width={96}
              height={96}
              className="mr-4 size-10 min-h-10 min-w-10 cursor-pointer rounded-lg transition-opacity hover:opacity-80"
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
