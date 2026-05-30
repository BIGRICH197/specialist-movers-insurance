import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./deck.css";

const inter = localFont({
  src: "./fonts/Inter_18pt-Light.ttf",
  variable: "--font-inter",
  display: "swap",
});

const termina = localFont({
  src: "./fonts/TerminaTest-Bold.otf",
  variable: "--font-termina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insurance partners - Contents moves proposal",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`deck-document ${inter.variable} ${termina.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
