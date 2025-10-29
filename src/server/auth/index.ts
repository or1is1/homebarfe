import NextAuth from "next-auth";
import { cache } from "react";
// import "server-only";
import { authConfig } from "./config";

const {
  auth: uncachedAuth,
  handlers,
  signIn,
  signOut,
  unstable_update,
} = NextAuth(authConfig);

const auth = cache(uncachedAuth);

export { auth as getSession, handlers, unstable_update as updateSession };

export async function signInWithGoogle() {
  "use server";
  await signIn("google");
}

export async function signOutAction() {
  "use server";
  await signOut();
}
