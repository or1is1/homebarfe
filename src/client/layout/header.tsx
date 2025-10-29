import { getSession, signOutAction } from "@/server/auth";
import { HydrateClient } from "@/trpc/server";

import "@/styles/googleSignInButton.css";
import NavigationButton from "../components/navigationButton";

export default async function Header() {
  const session = await getSession();

  return (
    <HydrateClient>
      <header className="flex min-w-fit space-x-2">
        <NavigationButton href={"/"}>메인</NavigationButton>
        <NavigationButton href={"/ingredient"}>재료</NavigationButton>
        <NavigationButton href={"/inventory"}>보관함</NavigationButton>
        <NavigationButton href={"/recipe"}>레시피</NavigationButton>
        <NavigationButton href={"/bookmark"}>즐겨찾기</NavigationButton>
        <div className="flex flex-1" />
        {session ? (
          <NavigationButton onClick={signOutAction}>로그아웃</NavigationButton>
        ) : (
          <NavigationButton href={"/login"}>로그인</NavigationButton>
        )}
      </header>
    </HydrateClient>
  );
}
