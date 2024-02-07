"use client";

import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const myFont = Rubik({ subsets: ['latin']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`overflow-scroll`} style={{scrollBehavior:'smooth'}}>
      <body className={`${myFont.className}`}>
        <div className="overflow-x-hidden bg-white z-10">
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  );
}
