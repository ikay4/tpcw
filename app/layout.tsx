import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const futuraBook = localFont({
  src: "../public/fonts/futurabold.otf",
  variable: '--font-futurabook'
})

const lucidaSansUnicode = localFont({
  src: "../public/fonts/lucidasansunicode.ttf",
  variable: '--font-lucidasansunicode'
})

export const metadata: Metadata = {
  title: "Texas Pokemon Community Website",
  description: "The TPCW Home Page",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${futuraBook.variable} ${lucidaSansUnicode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
