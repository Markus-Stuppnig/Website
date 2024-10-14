"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Progressbar({
  number,
  colorDone,
  colorNot,
}: {
  number: number;
  colorDone: string;
  colorNot: string;
}) {
  const [inView, setInView] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver is neccessary to trigger the animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
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
      className={`h-[1.5rem] rounded-lg overflow-hidden w-full cursor-pointer zoom-on-hover-medium`}
      style={{ backgroundColor: colorNot }}
    >
      <span className="absolute ml-5">{number} %</span>
      <div
        className={`h-[1.5rem] flex items-center ${colorDone} transition-all duration-1000 ease-out`}
        style={{ width: inView ? `${number}%` : "0%" }}
      ></div>
    </div>
  );
}
