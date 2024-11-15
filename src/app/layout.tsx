import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { Yuji_Syuku } from 'next/font/google'

const inter = Yuji_Syuku({
  subsets: ['latin'],
  weight: "400"
})

export const metadata: Metadata = {
  title: "百人一首JAPAN",
  description: "Search the English translation of the Japanese poem 「hyakunin-issyu」into English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
