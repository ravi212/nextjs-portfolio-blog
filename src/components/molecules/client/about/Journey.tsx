"use client";
import React from "react";
import { motion } from "framer-motion";
import Milestones from "@/components/atoms/client/about/Milestones";


const Journey = () => {

  return (
    <div className="w-full relative overflow-hidden py-12 flex flex-col rounded-3xl ">
      
      {/* vertical navigation line */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="w-[3px] bg-primaryTextColor"
      ></motion.div>
      {/* Navigation dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
        className="flex flex-col gap-4  top-0"
      >
        
        <Milestones />

      </motion.div>
    </div>
  );
};

export default Journey;
