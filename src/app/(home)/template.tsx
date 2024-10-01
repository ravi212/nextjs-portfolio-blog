"use client";
import DrawerMenu from "@/components/molecules/client/layout/DrawerMenu";
import Navbar from "@/components/molecules/client/layout/Navbar";
import NavIndicator from "@/components/molecules/client/layout/NavIndicator";
import SideBar from "@/components/molecules/client/layout/SideBar";
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
  display: "swap",
});

export default function Template({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const [breakPoint, setBreakPoint] = useState(ScreenSizes.MEDIUM);
  const [open, toggle] = useToggle(false);

  useEffect(() => {
    window.addEventListener("resize", () => setBreakPoint(window.innerWidth));
  }, []);

  return (
    <main
      className={`w-full flex flex-row gap-6 min-h-screen px-5 md:px-8 bg-background`}
    >
      <SideBar />

      <div className={`flex flex-1 flex-col `}>
        <Navbar openDrawer={open} toggleDrawer={toggle} />
        <div className="flex flex-col flex-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          >
            {children}
          </motion.div>
        </div>
      </div>

      <DrawerMenu breakPoint={breakPoint} open={open} onClose={toggle} />

      {/* Navigation indicator */}
      <NavIndicator />
    </main>
  );
}
