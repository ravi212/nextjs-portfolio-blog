import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItem = ({ title, link }: NavItemProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={`${
        pathName == link ? "text-secondaryTextColor font-semibold text-md" : ""
      } text-primaryTextColor hover:text-secondaryTextColor text-md`}
      href={link}
    >
      {title}
    </Link>
  );
};

export default NavItem;
