"use client";

import Image from "next/image";
import profilePic from "/public/dp.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { hobbies, socialsData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { TypeAnimation } from "react-type-animation";

function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const hobbyList: (string | number)[] = [];
  for (const hobby of hobbies) {
    hobbyList.push(hobby, 1000);
  }

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
            src={profilePic}
            alt='Fardin Anam Aungon'
            width={1024}    // Increase width
            height={1024}   // Increase height
            quality={95}
            priority={true}
            className='h-32 w-32 rounded-full border-[0.25rem] object-cover border-white shadow-xl'  // Adjusted h-32 and w-32 for Tailwind CSS classes
/>

          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
  className='mb-8 mt-4 px-4 text-lg font-medium !leading-[1.4] sm:text-2xl'
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  Hello, I'm<span className='font-bold'> Nafis Karim,</span> a
  <span className='font-bold'> Lecturer at the </span> at{" "}
  <a
    href='https://www.bracu.ac.bd/'
    className='underline italic'
    target='_blank'
  >
    Department of CSE, Brac University
  </a>{" "}
  and I have just completed my B.Sc. in
  <span className='font-bold'> Computer Science And Engineering </span> from{" "}
  <a
    href='https://www.buet.ac.bd/web/#/'
    className='underline italic'
    target='_blank'
  >
    BUET.
  </a>{" "}
  I enjoy
  <br />
  <TypeAnimation
    cursor
    style={{ fontWeight: "bold" }}
    sequence={hobbyList}
    wrapper='span'
    speed={50}
    repeat={Infinity}
  />
</motion.p>


      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/CV.pdf'
          download
        >
          Download CV{" "}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <div className='flex flex-row gap-2'>
          <a
            className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href={socialsData.linkedin.url}
            target='_blank'
          >
            <BsLinkedin />
          </a>

          <a
            className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
            href={socialsData.github.url}
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
