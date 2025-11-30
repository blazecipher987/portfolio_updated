// ResearchSection.js
"use client";

import React from "react";
import { researchData } from "@/lib/data"; // Import your research data here
import ResearchItem from "./ResearchItem";
import { motion } from "framer-motion";

export default function ResearchSection() {
  return (
    <motion.section
      id="research"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">My Research</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Here is a collection of my research projects, collaborations, and contributions in various fields.
        </p>
      </div>

      <div className="space-y-8 max-w-3xl mx-auto">
        {researchData.map((item, index) => (
          <ResearchItem key={index} {...item} />
        ))}
      </div>
    </motion.section>
  );
}
