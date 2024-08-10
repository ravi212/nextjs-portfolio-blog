"use client";

import Curtain from "@/components/molecules/client/layout/Curtain";
import DrawerMenu from "@/components/molecules/client/layout/DrawerMenu";
import Footer from "@/components/molecules/client/layout/Footer";
import Navbar from "@/components/molecules/client/layout/Navbar";
import NavIndicator from "@/components/molecules/client/layout/NavIndicator";
import SocialIcons from "@/components/molecules/client/layout/SocialIcons";
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
  display: 'swap'
});

export default function Template({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [breakPoint, setBreakPoint] = useState(ScreenSizes.MEDIUM);
  const [open, toggle] = useToggle(false);

  useEffect(() => {
    window.addEventListener("resize", () => setBreakPoint(window.innerWidth),)
  }, [])

  return (
    <main className={`${inter.className} ${poppins.className} flex flex-col min-h-screen px-10 md:px-20 bg-background`}>
    <Navbar openDrawer={open} toggleDrawer={toggle} />
      <div className={`flex-1`}>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        >
          {children}
        </motion.div>

        {/* Social Icons */}
        <div className={`fixed bottom-24 ${breakPoint < ScreenSizes.MEDIUM ? 'right-4': ''} `}>
          <SocialIcons />
        </div>

        {/* Navigation indicator */}
        <NavIndicator />  
      </div>

      {/* footer */}
      <Footer />

      <DrawerMenu breakPoint={breakPoint} open={open} onClose={toggle}/>
    
    </main>


  );
}
