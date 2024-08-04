import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItem = ({ title, link }: NavItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${
        pathName == link ? "text-secondaryTextColor" : ""
      } text-primaryTextColor hover:text-secondaryTextColor p-4`}
      href={link}
    >
      {title}
    </Link>
  );
};

export default NavItem;
