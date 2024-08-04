import React from "react";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import useTheme from "@/hooks/useTheme";
import { Theme } from "@/enum/Theme";

const SocialItem = ({ title, link, type }: SocialItemProps) => {

  const {theme} = useTheme();
  
  const renderIcon = (type: string) => {
    switch (type) {
      case 'github':
        return theme == Theme.DARK ? <ImGithub /> : <VscGithub />
      case 'mail':
        return theme == Theme.DARK ? <MdEmail /> : <MdOutlineEmail />
    }
  }

  return (
    <Link href={link}>
        {renderIcon(type)}
    </Link>
  );
};

export default SocialItem;
