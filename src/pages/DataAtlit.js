import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Row, Col, Divider } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link'
import Table from '../components/Table';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
const { Header, Sider, Content } = Layout;

function DataAtlit(props) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
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
              <Table />
        </Layout>
    </>
    
  )
}

export default DataAtlit