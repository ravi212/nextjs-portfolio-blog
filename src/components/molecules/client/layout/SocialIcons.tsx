"use client";
import React from "react";
import { SOCIAL_ITEMS } from "@/constants/client.const";
import SocialItem from "../../../atoms/client/layout/SocialItem";

const SocialIcons = () => {
  return (
    <div className={`flex flex-row items-center gap-3`}>
      {SOCIAL_ITEMS.map((item, index) => (
          <SocialItem
            key={item.link}
            link={item.link}
            type={item.type}
            title={item.title}
            index={index}
          />
      ))}
    </div>
  );
};

export default SocialIcons;
