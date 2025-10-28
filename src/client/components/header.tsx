import { auth } from "@/server/auth";
import { HydrateClient, api } from "@/trpc/server";
import Link from "next/link";
import { LatestPost } from "./post";

export default async function Header() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <header className="flex h-20 items-center justify-center">
        <Link href={"/"} className="w-30 text-2xl text-white">
          홈
        </Link>
        <Link href={"/recipe"} className="w-30 text-2xl text-white">
          레시피
        </Link>
        <Link href={"/ingredient"} className="w-30 text-2xl text-white">
          재료
        </Link>
        <Link href={"/inventory"} className="w-30 text-2xl text-white">
          바구니
        </Link>
        <Link href={"/bookmark"} className="w-30 text-2xl text-white">
          즐겨찾기
        </Link>

        <div className="flex items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            {session ? "로그아웃" : "로그인"}
          </Link>
        </div>

        {session?.user && <LatestPost />}
      </header>
    </HydrateClient>
  );
}
