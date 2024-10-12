import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({
  children,
  className,
}: SectionHeadingProps) {
  return (
    <h2 className={`text-[2.2rem] md:text-[3rem] capitalize ${className}`}>
      {children}
    </h2>
  );
}
