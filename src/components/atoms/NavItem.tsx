import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from 'framer-motion'
const NavItem = ({ title, link }: NavItemProps) => {
  const pathName = usePathname();
  return (
    <motion.span 
      className={`hover:border-b p-2 ${pathName == link ? 'border-b' : ''}`}
    >
      <Link
        className={`${
          pathName == link ? "text-secondaryTextColor font-semibold text-md" : ""
        } text-primaryTextColor shadow-2xl hover:text-secondaryTextColor text-md`}
        href={link}
      >
        {title}
      </Link>
    </motion.span>

  );
};

export default NavItem;
