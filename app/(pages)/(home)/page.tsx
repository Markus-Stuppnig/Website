import SectionDivider from "@/components/-General/SectionDivider";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Recommendations from "@/components/Recommendations/Recommendations";

export default function Home() {
  return (
    <main className="mt-1 sm:mt-10">
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Recommendations />
      <SectionDivider />
    </main>
  );
}
