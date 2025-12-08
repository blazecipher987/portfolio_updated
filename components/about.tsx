"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am a passionate Computer Science student who enjoys learning new
        stuffs about technology and research methodology. I am always eager to
        learn new things and apply them in real life. My undergraduate thesis
        was done under the supervision of{" "}
        <a
          href="https://sites.google.com/site/abdullahadnan"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "blue" }}
        >
          Dr. Muhammad Abdullah Adnan
        </a>{" "}
        It focused on developing a novel defesne mechanism for Vertical Federated Learninng using autoencoderes and PCA guided graident sparsificationn.

      </p>
      <p className="mb-3">
        When I am not studying, I enjoy listening to music, playing the guitar,
        and watching movies. I enjoy performing on stage in various cultural
        programs Furthermore I have always loved attending olynmpiads
        and have coached teams of students on this. I am also very interested in debating
        and have participated in several debate competitions.
      </p>
      <p className="mb-3">
        Starting from Summer 2025, I joined the CSE Department at the School of
        Data and Sciences (SDS) in BRAC University as a Lecturer. Before that, I was also a Lecturer
        at United International University. I am actively
        looking for fully-funded Graduate Research Student positions in top CS
        research labs. You are also welcome to knock me with startup ideas and
        educational content creation opportunities.
      </p>
    </section>
  );
}

export default About;
