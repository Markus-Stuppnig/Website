"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const getCurrentYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year.toString());
    };

    getCurrentYear();
  }, []);

  return (
    <>
      <footer className="pt-7 pb-7 md:pt-10 md:pb-8 px-4 text-gray-500 w-full flex justify-center shadow-2xl">
        <div className="flex flex-row items-center text-center gap-x-3 lg:w-2/3 text-xs">
          <div className="w-1/3">Wexstraße 19-23, 1200 Vienna</div>
          <div className="w-1/3">
            &copy; {currentYear} Markus Stuppnig. All rights reserved.
          </div>
          <div className="w-1/3">
            <Link href="mailto:markus@stuppnig.net" className="underline w-1/3">
              markus@stuppnig.net
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
