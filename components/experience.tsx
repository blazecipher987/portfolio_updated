"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView, useTheme } from "@/lib/hooks";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#d1d5db" : "#374151"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f9fafb" : "rgba(30, 30, 30, 0.8)",
                boxShadow:
                  theme === "light"
                    ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                    : "0 4px 8px rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                textAlign: "left",
                padding: "2rem 2.5rem",
                color: theme === "light" ? "#111827" : "#f3f4f6",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.5rem solid #d1d5db"
                    : "0.5rem solid rgba(255, 255, 255, 0.3)",
              }}
              // date={<span className="text-lg font-semibold">{item.date}</span>}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.2)",
                color: theme === "light" ? "#374151" : "#f9fafb",
                fontSize: "1.75rem",
                boxShadow:
                  theme === "light"
                    ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                    : "0 4px 8px rgba(255, 255, 255, 0.1)",
              }}
              visible={true}
            >
              <h3 className="text-2xl font-bold capitalize mb-1">
                {item.title}
              </h3>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {item.location}
              </p>
            
              {Object.keys(item.others).length > 0 && (
                <ul className="mt-2 font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                  {Object.entries(item.others).map(([key, value]) => (
                    <li key={key} className="text-md">
                      <span className="font-semibold">{key}:</span> {value}
                    </li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
