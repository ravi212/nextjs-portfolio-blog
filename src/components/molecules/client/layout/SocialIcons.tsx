"use client";
import React from "react";
import { SOCIAL_ITEMS } from "@/constants/client.const";
import SocialItem from "../../../atoms/client/layout/SocialItem";

const SocialIcons = () => {
  return (
    <div className={`flex flex-row gap-4`}>
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
