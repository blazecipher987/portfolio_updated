"use client";

import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { useTheme } from "@/lib/hooks";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  imageUrlDark,
  githubUrl,
  websiteUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-gray-100 max-w-[48rem] border border-black/5 rounded-lg overflow-hidden sm:pr-10 relative sm:h-[18rem] hover:bg-gray-200 transition sm:group-even:pl-10 dark:border-white/5 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div
          className={`pt-4 pb-7 px-5 sm:pt-8 flex flex-col h-full ${
            imageUrl ? "sm:max-w-[55%] sm:pl-10 sm:group-even:ml-[20rem]" : "w-full"
          }`}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-2 text-xs leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex mt-3 mb-3 gap-2">
            {githubUrl && (
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="size-5 focus:scale-[1.5] hover:scale-[1.15]" />
                </a>
              </li>
            )}
            {websiteUrl && (
              <li>
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                  <FaLink className="size-5 focus:scale-[1.5] hover:scale-[1.15]" />
                </a>
              </li>
            )}
          </ul>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {imageUrl && (
          <Image
            src={theme === "dark" && imageUrlDark ? imageUrlDark : imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 right-8 w-[20rem] h-[12rem] rounded-lg shadow-2xl dark:shadow-white/40
            transition 
            group-hover:scale-[1.04]
            group-hover:translate-x-0
            group-hover:translate-y-0
            group-hover:rotate-0
            group-even:right-[initial] group-even:left-8"
          />
        )}
      </article>
    </motion.div>
  );
}

export default Project;
