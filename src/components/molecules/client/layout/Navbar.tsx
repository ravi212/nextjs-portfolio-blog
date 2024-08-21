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
import SocialIcons from "./SocialIcons";

const Navbar = ({openDrawer, toggleDrawer}: NavBarProps) => {

  return (
    <>
        <div className="hidden md:flex flex-row items-start justify-between py-10 ">
          
          <div className="flex flex-col gap-4">
            <div>
            <p className="text-3xl font-medium text-primaryColor">Ravi</p>
            <p className="text-2xl font-normal text-primaryColor">Raina.</p>
            </div>

            {/* Social Icons */}
            <div className={``}>
              <SocialIcons />
            </div>
          </div>
          
          <ThemeSwitch />
        
        </div>


        <div className="flex flex-row items-center justify-between gap-4 py-10 visible md:hidden">
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
