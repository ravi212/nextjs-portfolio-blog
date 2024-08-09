"use client";
import React from "react";
import { Drawer, Placeholder } from "rsuite";
import SocialIcons from "./SocialIcons";
import "rsuite/dist/rsuite.min.css";
const DrawerMenu = ({ open, onClose }: DrawerMenuProps) => {
  return (
    <Drawer
      placement={"left"}
      backdrop={false}
      size={"xs"}
      open={open}
      onClose={onClose}
    >
      <Drawer.Header closeButton={false}>
        <Drawer.Actions>
          <div>
            <SocialIcons styleClass="flex flex-row" />
          </div>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>{/* <Placeholder.Paragraph rows={8} /> */}</Drawer.Body>
    </Drawer>
  );
};

export default DrawerMenu;
