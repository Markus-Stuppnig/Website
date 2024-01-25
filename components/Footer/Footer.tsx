'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import SectionDivider from "../-General/SectionDivider";

export default function Footer() {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const getCurrentYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year.toString());
    };

    getCurrentYear();
  }, []);

  return (
    <>
      <SectionDivider />
      <footer className="pt-10 pb-10 px-4 text-center text-gray-500 w-full flex justify-center shadow-2xl">
        
        <div className="flex items-center justify-between w-1/2">
          <small className="pb-2 block text-xs">
            Wexstraße 19-23, 1200 Vienna
              </small>
          <small className="pb-2 block text-xs">
            &copy; { currentYear } Markus Stuppnig. All rights reserved.
              </small>
          <Link href="mailto:markus@stuppnig.net" className="pb-2 block text-xs">
                markus@stuppnig.net
              </Link>
        </div>
      </footer>
    </>
  );
}
