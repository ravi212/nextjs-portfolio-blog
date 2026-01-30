import React from "react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { SOCIAL_ITEMS } from "@/constants/client.const";

const SocialItem = ({ link, type, index }: SocialItemProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "github":
        return (
          <GitHubIcon className=" text-primaryColor hover:text-secondaryTextColor" />
        );
      case "mail":
        return (
          <EmailIcon className=" text-primaryColor hover:text-secondaryTextColor" />
        );
      case "linkedIn":
        return (
          <LinkedInIcon className=" text-primaryColor hover:text-secondaryTextColor" />
        );
    }
  };

  return (
    <>
      <Link
        target="_blank"
        className="justify-center data-twe-ripple-init"
        href={link}
      >
        {renderIcon(type)}
      </Link>
      {index !== SOCIAL_ITEMS.length - 1 && <span >|</span>}
    </>
  );
};

export default SocialItem;
