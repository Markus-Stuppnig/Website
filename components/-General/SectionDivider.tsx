import React from "react";

export default function SectionDivider({height="h-[5rem] md:h-[20rem]"}: {height?: string}) {
  return (
    <div
      className={`${height} w-1 block`}
    ></div>
  );
}
