import GoogleSignInButton from "@/client/components/googleSignInButton";
import { signInWithGoogle } from "@/server/auth";

export default async function Login({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl = "/" } = await searchParams;

  return (
    <>
      <form action={signInWithGoogle}>
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <GoogleSignInButton />
      </form>
    </>
  );
}
