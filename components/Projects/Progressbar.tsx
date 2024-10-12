"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Progressbar({
  number,
  colorDone,
  colorNot,
  height,
  opacityDone,
  opacityNot,
}: {
  number: number;
  colorDone: string;
  colorNot: string;
  height: string;
  opacityDone: string;
  opacityNot: string;
}) {
  const [inView, setInView] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver ist notwendig damit man reagieren kann wenn das Element zu sehen ist
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={progressBarRef}
      className={`h-${height} rounded-lg overflow-hidden w-full md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-${opacityNot}`}
      style={{ backgroundColor: colorNot }}
    >
      <div
        className={`h-full flex items-center md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-${opacityDone} ${colorDone} transition-all duration-1000 ease-out`}
        style={{ width: inView ? `${number}%` : "0%" }} 
      >
        <p className="ml-5">{number} %</p>
      </div>
    </div>
  );
}
