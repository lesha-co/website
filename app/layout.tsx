import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { DocumentThemeSelectorScript } from "./ui/DocumentThemeSelectorScript";
import { Analytics } from "@vercel/analytics/next";
import { useCV } from "@/lib/useCV";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Analytics />
      <head>
        <meta name="darkreader-lock" />
        <DocumentThemeSelectorScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
