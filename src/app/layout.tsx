import type { Metadata } from "next";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import { Yuji_Syuku } from 'next/font/google'

const inter = Yuji_Syuku({
  subsets: ['latin'],
  weight: "400"
})

const siteName= "百人一首JAPAN";
const description = "Search the English translation of the Japanese poem 「hyakunin-issyu」into English.";
const url = 'https://hyakunin-issyu.vercel.app/';
const imgUrl = '/favicon.ico'
const keywords = ["百人一首", "hyakunin-issyu", "和歌", "Japanese", "English", "translation", "英訳"];

export const metadata: Metadata = {
  title: siteName,
  description: description,
  keywords: keywords,
  icons: imgUrl,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
    images: [{
      url: imgUrl
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    images: imgUrl
    // site: '@サイト用アカウントのTwitterID',
    // creator: '@作者のTwitterID',
  },
  verification: {
    // google: 'Fjx4p3cOWCdJJOsx9Cz11hOS0a9gj763H1vCqp9QoZs',
  },
  alternates: {
    canonical: url,
  },
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
