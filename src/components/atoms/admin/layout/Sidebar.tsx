"use client"
import React from 'react'
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const SideBar = ({collapsed}: {collapsed: boolean}) => {
  return (
    <Sider width={250} trigger={null} collapsible collapsed={collapsed} className="w-full bg-secondaryColor">
    <Menu
      mode="inline"
      theme='dark'
      defaultSelectedKeys={['1']}
      className="w-full"
      style={{ height: '100%', borderRight: 0, width: '100%' }}
    >
      <p className='p-2 w-full text-center text-lg font-normal text-white hover:text-white hover:bg-red-400 bg-red-500 cursor-pointer transition-all duration-100' >Option 1</p>
    </Menu>
  </Sider>
  )
}

export default SideBar