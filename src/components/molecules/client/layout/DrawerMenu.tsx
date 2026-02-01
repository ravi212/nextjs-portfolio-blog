"use client";
import React from "react";
import { Drawer } from "antd";
import { NAV_ITEMS } from "@/constants/client.const";
import { usePathname } from "next/navigation";
import LaunchIcon from "@mui/icons-material/Launch";
interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
  breakPoint: number;
}

const DrawerMenu = ({ open, onClose, breakPoint }: DrawerMenuProps) => {
  const pathname = usePathname();

  return (
    <Drawer
      placement={"left"}
      width={260}
      onClose={onClose}
      open={open}
      closeIcon={false}
      mask={false}
      maskClosable
      getContainer={false}
      style={{
        backgroundColor: "rgba(var(--primary-color))",
        left: 0,
        top: 0,
      }}
      styles={{
        body: { padding: 0, margin: 0 },
      }}
    >
      <div className="flex flex-col justify-between items-center h-full">
        {/* Close Icon */}
        {/* <div className="flex w-full justify-end pt-4 pr-4">
          {breakPoint < ScreenSizes.XSMALL && (
            <span onClick={onClose} className="cursor-pointer">
              <CloseIcon className="w-7 h-7 text-secondaryColor md:text-primaryColor hover:text-secondaryTextColor" />
            </span>
          )}
        </div> */}

        {/* Menu Items */}
        <nav className="flex flex-1 flex-col w-[90%] gap-3 py-10">
          {NAV_ITEMS.map((item, index) => {
            const isActive = item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);

            return (
              <a
                key={index}
                href={`${item.link}`}
                className={`group relative flex items-center justify-between px-3 py-2 transition-all duration-200
                  ${
                    isActive
                      ? "bg-red-50 !text-red-500 font-medium"
                      : "light:text-primaryColor dark:text-secondaryColor"
                  }`}
              >
                {/* Left: title */}
                <span className="flex items-center gap-2">{item.title}</span>
                {isActive && (
                  <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                )}
                {/* Right arrow */}

                {/* Left indicator for active */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-red-500 dark:bg-red-400" />
                )}
              </a>
            );
          })}

                                                          <a
        href={`${process.env.NEXT_PUBLIC_BLOG_URL}`}
        target="_blank"
        className="
              
                flex gap-2
                px-3 py-2
                text-sm
                text-primaryColor
                rounded
                transition
                light:text-primaryColor dark:text-secondaryColor
                hover:text-secondaryTextColor
                min-w-0 whitespace-nowrap
              "
      >
        {/* <LaunchIcon fontSize="small" /> */}
        <span className="inline">Blog</span>
      </a>
        </nav>

      </div>
    </Drawer>
  );
};

export default DrawerMenu;
