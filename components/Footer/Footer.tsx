'use client'; 

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa"; 

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
    <footer className="bg-gray-900 text-gray-400 pt-5 pb-4 md:pt-10 md:pb-8 px-4 text-center w-full flex flex-col items-center shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 lg:w-2/3 space-y-4 md:space-y-0">
        
        <small className="block text-sm md:text-base">
          Wexstraße 19-23, 1200 Vienna
        </small>

        <Link href="mailto:markus@stuppnig.net" className="block text-sm md:text-base underline hover:bg-black hover:text-white transition-colors">
          markus@stuppnig.net
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="https://instagram.com/markusstuppnig" target="_blank" className="flex hover:text-black transition-colors">
            <FaInstagram size={24} /> 
          </Link>
        </div>

      </div>
      
      <div className="w-full mt-4">
        <small className="block text-sm md:text-base">
          &copy; {currentYear} Markus Stuppnig. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
