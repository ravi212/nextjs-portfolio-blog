"use client"
import { Layout as AntLayout } from 'antd';

const { Header, Sider, Content } = AntLayout;

const BgLayout = ({ children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout>
        <Header className="bg-white shadow-md p-4">
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