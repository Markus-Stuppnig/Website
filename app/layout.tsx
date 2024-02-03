'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className='scroll-smooth overflow-scroll' style={{scrollBehavior:'smooth'}}>
      <body style={{background: "url('svgviewer-output.svg') no-repeat center center fixed", backgroundSize: 'cover'}}>
        <Navbar />
        <div className="overflow-x-hidden">
          <div className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
