"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

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
          <div className="w-1/3 animate-slidein">
            Wexstraße 19-23, 1200 Vienna
          </div>
          <div className="w-1/3 animate-slidein">
            &copy; {currentYear} Markus Stuppnig. All rights reserved.
          </div>
          <div className="w-1/3 animate-slidein flex flex-row justify-center space-x-3">
            <Link href="https://instagram.com/markusstuppnig" target="_blank">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://github.com/Markus-Stuppnig" target="_blank">
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/markus-stuppnig/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
