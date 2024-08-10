"use client";
import ThemeSwitch from "@/components/atoms/client/layout/ThemeSwitch";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NavItem from "../../../atoms/client/layout/NavItem";
import { NAV_ITEMS } from "@/constants/common";
// const ThemeSwitcher = lazy(() => import("@/components/molecules/ThemeSwitch"));
// or
const ThemeSwitcher = dynamic(() => import("@/components/atoms/client/layout/ThemeSwitch"), {
  ssr: false,
});
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { MenuType } from "@/enum/enum";
import useToggle from "@/hooks/useToggle";

const Navbar = ({openDrawer, toggleDrawer}: NavBarProps) => {

  return (
    <>
        <div className="hidden md:flex flex-row items-center justify-between py-10 ">
          <ThemeSwitch />
          <div className="flex flex-row items-center uppercase">
            <nav className="flex gap-7">
              {NAV_ITEMS.map((item, index) => (
                <NavItem type={MenuType.TOP} key={index} title={item.title} link={item.link} />
              ))}
            </nav>
            <span className="border cursor-pointer ml-5 px-4 py-2 border-secondaryTextColor text-secondaryTextColor shadow-lg rounded-3xl">
              Resume
            </span>
          </div>
        </div>


        <div className="flex flex-row items-center justify-between py-10 visible md:hidden">
          <ThemeSwitch />
          {openDrawer ? (
            <IoClose
              onClick={toggleDrawer}
              className="text-primaryTextColor w-8 h-8 cursor-pointer"
            />
          ) : (
            <MdMenuOpen
              onClick={toggleDrawer}
              className="text-primaryTextColor w-8 h-8 cursor-pointer"
            />
          )}
        </div>

    </>
  );
};

export default Navbar;
