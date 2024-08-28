import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { MenuType } from "@/enum/enum";
const NavItem = ({ title, link, type }: NavItemProps) => {
  const pathName = usePathname();
  return type == MenuType.SIDE ? (
    <motion.span
      className={`p-3 ${pathName == link ? "" : ""} text-center`}
    >
      <Link
        className={`${
          pathName == link
            ? "text-secondaryTextColor font-medium text-xl"
            : "font-normal text-base hover:text-lg"
        } text-secondaryColor hover:font-medium duration-150 shadow-2xl hover:text-secondaryTextColor `}
        href={link}
      >
        {title}
      </Link>
    </motion.span>
  ) : (
    <motion.span
      className={` p-2 ${pathName == link ? "" : ""}`}
    >
      <Link
        className={`${
          pathName == link
            ? "text-secondaryTextColor font-medium text-lg pl-1"
            : "font-normal text-base hover:text-lg"
        } text-primaryColor hover:pl-1 hover:font-medium transition-all duration-100 shadow-2xl hover:text-secondaryTextColor `}
        href={link}
      >
        {title}
      </Link>
    </motion.span>
  );
};

export default NavItem;
