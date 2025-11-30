"use client";

import React from "react";
import { motion } from "framer-motion";
import { workExperienceData } from "@/lib/data";

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="space-y-12">
        {workExperienceData.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 border border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              {experience.organization} - {experience.location}
            </p>
            <p className="text-md text-gray-500 dark:text-gray-400 mt-1 italic">
              {experience.date}
            </p>

            <div className="mt-6">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Courses Taught:
              </h4>
              <ul className="list-disc list-inside text-md text-gray-700 dark:text-gray-300 mt-3 space-y-1">
                {experience.courses.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
