"use client";

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/activeSectionContext";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/lib/hooks";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useScroll();
  // const y = useTransform(scrollY, (value) => (value < 4000 ? value : 4000));
  const scale = useTransform(scrollY, (value) =>
    1 - value / 1000 < 0.75 ? 0.75 : 1 - value / 1000
  );

  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0d1117] dark:text-gray-50 dark:text-opacity-90`}
      >
        <motion.div
          style={{ scale: scale }}
          className='fixed bg-[#fbe2e3] top-[10rem] -z-10 right-[11rem] size-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#703839]'
        ></motion.div>
        <motion.div
          style={{ scale: scale }}
          className='bg-[#dbd7fb] fixed top-[5rem] -z-10 left-[-35rem] h-[25rem] w-[25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#1F2544]'
        ></motion.div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
