"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/activeSectionContext";

function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-lg backdrop-blur-md">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          <Link href="/">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Soumya's Portfolio
            </motion.span>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-300 font-medium">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * link.hash.length }}
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "transition-all duration-300 hover:text-indigo-400",
                    {
                      "text-indigo-400 font-semibold":
                        activeSection === link.name,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
                {activeSection === link.name && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-1 w-8 bg-indigo-400 rounded-full"
                    layoutId="underline"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  ></motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
