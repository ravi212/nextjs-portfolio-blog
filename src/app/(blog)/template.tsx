"use client";
import { ScreenSizes } from "@/enum/enum";
import { Inter, Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Template({ children }: { children: React.ReactNode }) {
  const [breakPoint, setBreakPoint] = useState(ScreenSizes.MEDIUM);

  useEffect(() => {
    window.addEventListener("resize", () => setBreakPoint(window.innerWidth),)
  }, [])

  return (
    <main className={`${inter.className} ${poppins.className} flex flex-col min-h-screen p-5 bg-background`}>
        {children}
    </main>


  );
}
