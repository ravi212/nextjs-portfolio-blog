"use client";
import React from "react";
import { SOCIAL_ITEMS } from "@/constants/common";
import SocialItem from "../atoms/SocialItem";

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-6">
      {SOCIAL_ITEMS.map((item, index) => (
        <SocialItem
          key={index}
          link={item.link}
          type={item.type}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
