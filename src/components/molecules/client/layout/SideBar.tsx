"use client";
import dynamic from "next/dynamic";
import React from "react";
import NavItem from "../../../atoms/client/layout/NavItem";
import { NAV_ITEMS } from "@/constants/client.const";
// const ThemeSwitcher = lazy(() => import("@/components/molecules/ThemeSwitch"));
// or
const ThemeSwitcher = dynamic(() => import("@/components/atoms/client/layout/ThemeSwitch"), {
  ssr: false,
});
import { MenuType } from "@/enum/enum";

const SideBar = ({openDrawer, toggleDrawer}: NavBarProps) => {

  return (
    <>
        <div className="w-[20%] hidden lg:flex flex-col items-start justify-between py-10 ">
          <div className="flex flex-col items-start">
            <nav className="flex gap-7 flex-col">
              {NAV_ITEMS.map((item, index) => (
                <NavItem type={MenuType.TOP} key={index} title={item.title} link={item.link} />
              ))}
            </nav>
          </div>
        </div>

    </>
  );
};

export default SideBar;
