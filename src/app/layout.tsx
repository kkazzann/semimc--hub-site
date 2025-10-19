import "./global.scss";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// TODO
// napisac do wojaka o grafiki
export const metadata: Metadata = {
  metadataBase: new URL("https://hub.semimc.pl"),
  title: "semimc.pl • Centrum Linków do Social Media",
  description: "Wszystkie Social Media semimc.pl w pigułce!",

  openGraph: {
    title: "semimc.pl • Centrum Linków do Social Media",
    description: "Wszystkie Social Media semimc.pl w pigułce!",
    url: "https://hub.semimc.pl",
    siteName: "semimc.pl • Centrum Linków",
    images: [
      {
        url: "/og-hub.png",
        width: 1200,
        height: 630,
        alt: "Logo SEMI MC na graficznym tle",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEMI MC - Wszystkie linki w jednym miejscu",
    description:
      "Oficjalny hub z linkami do social mediów, sklepu i aktualnych wydarzeń.",
    images: ["/og-hub.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        style={{ margin: 0, background: "rgb(29, 1, 26)", color: "white" }}
        className={poppins.className}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
