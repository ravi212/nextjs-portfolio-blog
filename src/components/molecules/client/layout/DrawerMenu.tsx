"use client";
import React from "react";
import { Drawer } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import { NAV_ITEMS } from "@/constants/client.const";
import NavItem from "../../../atoms/client/layout/NavItem";
import { MenuType, ScreenSizes } from "@/enum/enum";

const DrawerMenu = ({ open, onClose, breakPoint }: DrawerMenuProps) => {
  return (
    <Drawer
    placement={'left'}
    width={320}
    onClose={onClose}
    open={open}
    closeIcon={false}
    mask={false}
    style={{backgroundColor: 'rgba(var(--primary-color))'}}
  >
    <div className="flex flex-col justify-between items-center h-[100%]">
    <div className="flex w-[100%] flex-row justify-end">
      {/* <SocialIcons /> */}
      {
        breakPoint < ScreenSizes.XSMALL 
        ? 
        <span onClick={onClose} className="cursor-pointer">
          <CloseIcon className="w-7 h-7 text-secondaryColor md:text-primaryColor hover:text-secondaryTextColor"/>
        </span>
        
        : <></>
      }
      
    </div>
    <nav className="flex flex-1 flex-col w-[90%] gap-5 py-20">
              {NAV_ITEMS.map((item, index) => (
                <NavItem type={MenuType.SIDE} key={index} title={item.title} link={item.link} />
              ))}
      </nav>
      {/* <div></div> */}
    </div>

  </Drawer>
  );
};

export default DrawerMenu;
