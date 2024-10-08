import React from "react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const SocialItem = ({ link, type }: SocialItemProps) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "github":
        return (
          <GitHubIcon className="w-7 h-7 text-primaryColor hover:text-secondaryTextColor" />
        );
      case "mail":
        return (
          <EmailIcon className="w-7 h-7 text-primaryColor hover:text-secondaryTextColor" />
        );
      case "linkedIn":
        return (
          <LinkedInIcon className="w-7 h-7 text-primaryColor hover:text-secondaryTextColor" />
        );
    }
  };

  return (
    <Link
      target="_blank"
      className="justify-center align-center w-8 h-8 pb-5 data-twe-ripple-init"
      href={link}
    >
      {renderIcon(type)}
    </Link>
  );
};

export default SocialItem;
