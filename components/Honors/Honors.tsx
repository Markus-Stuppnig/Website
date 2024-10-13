import React from "react";
import Heading from "@/components/miscellaneous/Heading";

export default function Honors() {
  return (
    <section id="honors" className="flex justify-center w-full">
      <div className="flex flex-col justify-start w-5/6 md:w-1/3 text-center">
        <Heading color="black">Honors & Awards</Heading>
        <p className="text-lg font-medium">
          This page is about some honors, awards and certificates I received.
        </p>
      </div>
    </section>
  );
}
