import React from "react";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";
import useTheme from "@/hooks/useTheme";
import { Theme } from "@/enum/Theme";

const SocialItem = ({ title, link, type }: SocialItemProps) => {

  const {theme} = useTheme();
  
  const renderIcon = (type: string) => {
    switch (type) {
      case 'github':
        return theme == Theme.DARK ? <ImGithub className="w-7 h-7 text-white" /> : <VscGithub className="w-7 h-7 text-primaryTextColor" />
      case 'mail':
        return theme == Theme.DARK ? <MdEmail className="w-7 h-7 text-white" /> : <MdOutlineEmail className="w-7 h-7 text-primaryTextColor" />
      case 'linkedIn':
        return theme == Theme.DARK ? <FaLinkedin className="w-7 h-7 text-white" /> : <RiLinkedinBoxLine className="w-7 h-7 text-primaryTextColor" />
    }
  }

  return (
    <Link target="_blank" className="justify-center align-center w-8 h-8 pb-5" href={link}>
        {renderIcon(type)}
    </Link>
  );
};

export default SocialItem;
