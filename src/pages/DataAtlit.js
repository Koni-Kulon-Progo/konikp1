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
import NavbarSide from '@/components/NavbarSide';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
const { Header, Sider, Content } = Layout;

function DataAtlit() {

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
        
    <Layout className="site-layout">
          <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
              
          >
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
              }}
          >
            <Divider orientation="center">DATA ATLIT</Divider>
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
          </Content>
        </Layout>
        </Layout>
    </>
    
  )
}

export default DataAtlit