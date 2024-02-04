import React from "react";

export default function SectionDivider({height="h-[1rem] md:h-[8rem]"}: {height?: string}) {
  return (
    <div
      className={`my-24 ${height} w-1 block`}
    ></div>
  );
}
