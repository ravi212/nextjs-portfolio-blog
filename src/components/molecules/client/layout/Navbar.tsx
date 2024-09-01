"use client";
import ThemeSwitch from "@/components/atoms/client/layout/ThemeSwitch";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import NavItem from "../../../atoms/client/layout/NavItem";
import { NAV_ITEMS } from "@/constants/client.const";
// const ThemeSwitcher = lazy(() => import("@/components/molecules/ThemeSwitch"));
// or
const ThemeSwitcher = dynamic(() => import("@/components/atoms/client/layout/ThemeSwitch"), {
  ssr: false,
});
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/navigation";

const Navbar = ({openDrawer, toggleDrawer}: NavBarProps) => {

  const router = useRouter();

  return (
    <>
        <div className="hidden lg:flex flex-row items-start justify-between pt-10 pb-5">
          
          <div className="flex flex-col gap-6">
            <div onClick={() => router.push('/')}>
              <p className="text-3xl font-medium text-primaryColor">Ravi <span className="font-light">R.</span></p>
              {/* <p className="text-2xl font-normal text-primaryColor">Raina.</p> */}
            </div>

            {/* Social Icons */}
            <div className={``}>
              <SocialIcons />
            </div>
          </div>
          
          <ThemeSwitch />
        
        </div>


        <div className="flex flex-row items-start justify-between gap-4 pt-10 pb-5 visible lg:hidden">

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

          <div className="flex flex-row gap-5">
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

        </div>

    </>
  );
};

export default Navbar;
