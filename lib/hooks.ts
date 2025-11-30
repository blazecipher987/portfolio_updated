import { ActiveSectionContext } from "@/context/activeSectionContext";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import ThemeContextProvider, { ThemeContext, ThemeContextType } from "@/context/theme-context";

function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error(
      "useTheme must be used within a ThemeContextProvider"
    );
  }

  return context;
}

export { useActiveSectionContext, useSectionInView, useTheme };
