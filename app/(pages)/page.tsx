import SectionDivider from "@/components/-General/SectionDivider";
import Experience from "@/components/Experience/Experience";
import Intro from "@/components/Intro/Intro";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main className="mt-10 relative">
      <Intro />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
    </main>
  );
}
