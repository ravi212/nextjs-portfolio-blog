"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/constants/client.const";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-[20%] hidden lg:flex">
      <aside className="sticky top-10 flex flex-col gap-1 px-2 h-fit w-full">
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={index}
                href={item.link}
                className={`group relative flex items-center justify-between px-3 py-2 transition-all duration-200
                  ${
                    isActive
                      ? "bg-red-50 !text-red-500 font-medium"
                      : "dark:text-primaryColor light:text-secondaryColor"
                  }`}
              >
                {/* Left content: title */}
                <span className="flex items-center gap-2">{item.title}</span>

                {/* Right arrow */}
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

                {/* Left indicator for active */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-r bg-red-400" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
