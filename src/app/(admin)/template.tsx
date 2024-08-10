"use client";
import Footer from "@/components/molecules/client/layout/Footer";
import { ScreenSizes } from "@/enum/enum";
import useTheme from "@/hooks/useTheme";
import useToggle from "@/hooks/useToggle";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Template({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [breakPoint, setBreakPoint] = useState(ScreenSizes.MEDIUM);
  const [open, toggle] = useToggle(false);

  useEffect(() => {
    window.addEventListener("resize", () => setBreakPoint(window.innerWidth),)
  }, [])

  return (
    <main className={`${inter.className} ${poppins.className} flex flex-col min-h-screen px-20 bg-background`}>
        {children}
        <Footer />
    </main>


  );
}
