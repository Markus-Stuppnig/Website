import React from "react";

type Color = "primary" | "secondary" | "white" | "black";

type SectionHeadingProps = {
  children: React.ReactNode;
  color?: Color;
  size?: String;
  weight?: String;
  zoomDuration?: number;
  capitalize?: boolean;
  zoom?: boolean;
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
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={`!cursor-pointer animate-slidein text-${color} ${weight} ${size} ${className} ${
        capitalize ? "!capitalize" : ""
      } ${zoom ? `zoom-on-hover-${zoomDuration}` : ""}`}
    >
      {children}
    </h2>
  );
}
