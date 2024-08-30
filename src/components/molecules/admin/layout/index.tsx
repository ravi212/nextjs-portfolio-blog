"use client"
import React, { useState } from "react"
import { Layout } from 'antd';
import SideBar from "@/components/atoms/admin/layout/Sidebar";
import Navbar from "@/components/atoms/admin/layout/Navbar";
import SideDrawer from "@/components/atoms/admin/layout/Drawer";
import { AdminMenuType } from "@/enum/enum";

const { Content } = Layout;
type Props = {
  children?: React.ReactNode
};

const AdLayout: React.FC<Props> = ({children}) => {

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <Layout style={{ minHeight: '100vh' }} className="flex flex-col md:flex-row">
      <div className="md:flex hidden">
        <SideBar collapsed={isCollapsed} />
      </div>
      
      <Layout className="flex-1">
        <Navbar toggle={(type) => type == AdminMenuType.SIDER ? setIsCollapsed(!isCollapsed) : setIsOpenDrawer(!isOpenDrawer)} />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
      </Layout>
      
      <SideDrawer isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
      
    </Layout>
  )
}

export default AdLayout
