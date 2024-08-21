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

const SideBar = ({openDrawer, toggleDrawer}: NavBarProps) => {

  return (
    <>
        <div className="w-[15%] hidden md:flex flex-col  items-start justify-between py-10 ">
          <div className="flex flex-col items-start">
            <nav className="flex gap-7 flex-col">
              {NAV_ITEMS.map((item, index) => (
                <NavItem type={MenuType.TOP} key={index} title={item.title} link={item.link} />
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between py-10 visible md:hidden">
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

export default SideBar;
