import SectionDivider from "@/components/-General/SectionDivider";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Recommendations from "@/components/Recommendations/Recommendations";
import Introduction from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <main>
      <About />
      <Introduction />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Recommendations />
      <SectionDivider />
    </main>
  );
}
