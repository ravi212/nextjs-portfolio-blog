"use client";
import React from "react";
import { NAV_ITEMS } from "@/constants/client.const";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const NavIndicator = () => {
  const pathname = usePathname();

  return (
    <div
      className={`items-center flex flex-col fixed  gap-6 right-7 md:right-10 
         h-[70%] justify-end bottom-0`}
    >
      {/* vertical navigation line */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        exit={{ height: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        className="w-[1px] bg-primaryTextColor"
      ></motion.div>

      {/* Navigation dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
        className="flex flex-col gap-6 absolute top-0"
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive =
            item.link === "/"
              ? pathname === "/"
              : pathname.startsWith(item.link);
          return (
            <div
              key={index}
              className={`${
                isActive
                  ? "bg-secondaryTextColor"
                  : "bg-primaryTextColor"
              } w-3 h-3 rounded-full `}
            ></div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default NavIndicator;
