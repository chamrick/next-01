import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import Image from "next/image";


import MainHeader from "./components/MainHeader/MainHeader";
import MainContent from "./components/MainContent/MainContent";
import MainFooter from "./components/MainFooter/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Content based around the sample datasets at https://jsonplaceholder.typicode.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <MainHeader />
        <MainContent children={children} />
        <MainFooter />
      </body>
    </html>
  );
}
