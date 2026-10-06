import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sourceSans = localFont({
  src: [
    { path: "./fonts/source-sans-3-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/source-sans-3-semibold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const sourceSerif = localFont({
  src: "./fonts/source-serif-4-regular.ttf",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alchemane | Human Hair Toppers, Extensions & Wigs",
  description:
    "Find natural-looking human hair toppers, extensions and wigs. Get help choosing online or at Alchemane's Khar West studio in Mumbai.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable} h-full`}>
      <body className="min-h-full font-body text-ink antialiased">{children}</body>
    </html>
  );
}
