import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu , Table} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import prisma from '../utils/prisma'
const { Header, Sider, Content } = Layout;



export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout className="layout">
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: (
                <Link href="/DataWasit">Data Wasit</Link>
              ),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: (
                <Link href="/DataPelatih">Data Pelatih</Link>
              ),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: (
                <Link href="/DataAtlit">Data Atlit</Link>
              ),
            },
          ]}
      />
    </Sider>
   <h1>C O M I N G S O O N</h1>

  </Layout>
  )
}