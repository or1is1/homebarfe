import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

import Body from "@/client/layout/body";
import Footer from "@/client/layout/footer";
import Main from "@/client/layout/main";
import Navigation from "@/client/layout/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "홈바페",
  description: "홈바와 홈카페 유저를 위한 레시피 관리 솔루션",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "icon", sizes: "96x96", url: "/favicon-96x96.png" },
  ],
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
      <body>
        <TRPCReactProvider>
          <Body>
            <Navigation />
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
