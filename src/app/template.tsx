"use client";

import Curtain from "@/components/molecules/Curtain";
import NavIndicator from "@/components/molecules/NavIndicator";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
      >
        {children}
      </motion.div>
      
      {/* Navigation indicator */}
      <NavIndicator />
    </div>

  );
}