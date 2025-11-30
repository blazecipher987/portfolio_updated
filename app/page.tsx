import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Research from "@/components/researches";
import SectionDivider from "@/components/section-devider";
import Skills from "@/components/skills";
import WorkExperience from "@/components/work";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nafis Karim | Portfolio",
  description:
    "Nafis Karim just finished his CS degree and started his teaching journey as a lecturer at BRAC University.",
};

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Experience />
      <WorkExperience />
      <Contact />
    </main>
  );
}
