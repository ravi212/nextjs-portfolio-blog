"use client";
import ThemeSwitch from "@/components/atoms/ThemeSwitch";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NavItem from "../atoms/NavItem";
import { NAV_ITEMS } from "@/constants/common";
// const ThemeSwitcher = lazy(() => import("@/components/molecules/ThemeSwitch"));
// or
const ThemeSwitcher = dynamic(() => import("@/components/atoms/ThemeSwitch"), {
  ssr: false,
});
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth >= 960 ? setOpenNav(false) : setOpenNav(true)
    );
  }, []);

  return (
    <>
      {!openNav ? (
        <div className="flex flex-row items-center justify-between py-10">
          <ThemeSwitch />
          <div className="flex flex-row items-center uppercase">
            <nav className="flex gap-7">
              {NAV_ITEMS.map((item, index) => (
                <NavItem key={index} title={item.title} link={item.link} />
              ))}
            </nav>
            <span className="border cursor-pointer ml-5 px-4 py-2 border-secondaryTextColor text-secondaryTextColor shadow-lg rounded-3xl">
              Resume
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-between py-10">
          <ThemeSwitch />
          {open ? (
            <IoClose
              onClick={() => setOpen(false)}
              className="text-primaryTextColor w-8 h-8 cursor-pointer"
            />
          ) : (
            <MdMenuOpen
              onClick={() => setOpen(true)}
              className="text-primaryTextColor w-8 h-8 cursor-pointer"
            />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
