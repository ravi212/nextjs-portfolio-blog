"use client";

import Curtain from "@/components/molecules/Curtain";
import DrawerMenu from "@/components/molecules/DrawerMenu";
import Footer from "@/components/molecules/Footer";
import Navbar from "@/components/molecules/Navbar";
import NavIndicator from "@/components/molecules/NavIndicator";
import SocialIcons from "@/components/molecules/SocialIcons";
import useTheme from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Inter, Poppins } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Template({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <body
      className={`${theme} anim flex flex-col min-h-screen px-20 bg-background`}
    >
      <Curtain />
      <main className={`${inter.className} ${poppins.className} flex-1`}>
        <Navbar openDrawer={(isOpen) => setOpenDrawer(isOpen)}/>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        >
          {children}
        </motion.div>

        {/* Social Icons */}
        <div className="fixed bottom-20 ">
          <SocialIcons styleClass="hidden md:flex flex-col" />
        </div>

        {/* Navigation indicator */}
        <NavIndicator />

        {/* footer */}
      </main>

      <Footer />

      <DrawerMenu open={openDrawer} onClose={() => setOpenDrawer(false)}/>
    </body>
  );
}
