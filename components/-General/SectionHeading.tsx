import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  textColor?: string;
  size?: string;
  additional?: string;
};

export default function SectionHeading({ children, textColor, size="text-[3rem]", additional }: SectionHeadingProps) {
  return (
    <h2 className={`${textColor} ${size} ${additional} capitalize text-center`}>
      {children}
    </h2>
  );
}