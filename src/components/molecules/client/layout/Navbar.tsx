"use client";
import ThemeSwitch from "@/components/atoms/client/layout/ThemeSwitch";
import React from "react";
import { MdMenuOpen } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import { useRouter } from "next/navigation";
import { Resume } from "@/components/atoms/client/layout/Resume";

const Navbar = ({ openDrawer, toggleDrawer }: NavBarProps) => {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:flex flex-row items-start justify-between pt-10 pb-5">
        <div className="flex flex-col gap-3">
          <div onClick={() => router.push("/")}>
            <p className="text-3xl font-medium text-primaryColor">
              Ravi <span className="font-light bg-secondaryTextColor/40">Raina.</span>
            </p>
            {/* <p className="text-2xl font-normal text-primaryColor">Raina.</p> */}
          </div>
        </div>
        <div className={`flex flex-row items-center gap-12`}>
          <SocialIcons />
          <Resume />
          <div className="flex gap-4">
          <ThemeSwitch />
          <div className="block lg:hidden">
            {openDrawer ? (
              <IoClose
                onClick={toggleDrawer}
                className="text-primaryTextColor w-7 h-7 cursor-pointer"
              />
            ) : (
              <MdMenuOpen
                onClick={toggleDrawer}
                className="text-primaryTextColor w-7 h-7 cursor-pointer"
              />
            )}
          </div>
          </div>

        </div>
      </div>

      <div className="flex flex-row items-start justify-between gap-4 pt-10 pb-5 visible md:hidden">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-3xl font-medium text-primaryColor">
              Ravi <span className="font-light bg-secondaryTextColor/40">Raina.</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className={`flex flex-row items-center gap-3`}>
            <SocialIcons />
            <span>|</span>
            <Resume />
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <ThemeSwitch />
          {openDrawer ? (
            <IoClose
              onClick={toggleDrawer}
              className="text-primaryTextColor w-7 h-7 cursor-pointer"
            />
          ) : (
            <MdMenuOpen
              onClick={toggleDrawer}
              className="text-primaryTextColor w-7 h-7 cursor-pointer"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
