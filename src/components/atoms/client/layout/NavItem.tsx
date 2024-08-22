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
            ? "text-secondaryTextColor font-semibold "
            : ""
        } text-secondaryColor shadow-2xl hover:text-secondaryTextColor text-lg hover:text-xl`}
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
            ? "text-secondaryTextColor font-semibold text-md"
            : ""
        } text-primaryTextColor shadow-2xl hover:text-secondaryTextColor text-md`}
        href={link}
      >
        {title}
      </Link>
    </motion.span>
  );
};

export default NavItem;
