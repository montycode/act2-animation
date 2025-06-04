import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soundify",
  description:
    "Discover, share, and enjoy music like never before with Soundify.",
  keywords: ["music", "Soundify", "audio", "streaming", "playlist", "songs"],
  authors: [
    { name: "@montycode", url: "https://github.com/montycode" },
    { name: "@Cabrera9806", url: "https://github.com/Cabrera9806" },
    { name: "@cquezada123", url: "https://github.com/cquezada123" },
    { name: "@crisifur19", url: "https://github.com/crisifur19" },
  ],
  icons: {
    icon: "/favicon.svg", // o .ico si usas favicon.ico
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
