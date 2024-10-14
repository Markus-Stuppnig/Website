import React from "react";

type Color = "primary" | "secondary" | "white" | "black";

type SectionHeadingProps = {
  children: React.ReactNode;
  color?: Color;
  size?: string;
  weight?: string;
  zoomDuration?: number;
  capitalize?: boolean;
  zoom?: boolean;
  animate?: string;
  id?: string;
  className?: string;
};

export default function Heading({
  children,
  color = "primary",
  size = "text-lg md:text-xl",
  weight = "font-semibold",
  zoomDuration = 200,
  capitalize = true,
  zoom = true,
  animate = "animate-slidein",
  id = "",
  className,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`${animate} text-${color} ${weight} ${size} ${className}
        ${capitalize ? "!capitalize" : ""}
        ${zoom ? `zoom-on-hover-${zoomDuration}` : ""}
      `}
    >
      {children}
    </h2>
  );
}
