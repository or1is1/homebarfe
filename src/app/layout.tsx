import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import Body from "@/client/layout/body";
import Footer from "@/client/layout/footer";
import Header from "@/client/layout/header";
import Main from "@/client/layout/main";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "홈바페",
  description: "홈바와 홈카페 유저를 위한 레시피 관리 솔루션",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-w-fit">
        <TRPCReactProvider>
          <Body>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </Body>
        </TRPCReactProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
