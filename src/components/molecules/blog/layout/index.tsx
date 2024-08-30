"use client"
import { Layout as AntLayout, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';

const { Header, Sider, Content } = AntLayout;

const BgLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout>
        <Header className="bg-white shadow-md p-4">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={toggleCollapsed}
            className="md:hidden"
          />
          <div className="text-center text-2xl font-bold">My Blog</div>
        </Header>
        <Content className="p-6 bg-gray-100">
          <div className="container mx-auto">{children}</div>
        </Content>
      </AntLayout>
    </AntLayout>
  );
};

export default BgLayout;