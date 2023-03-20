import {
    MenuFoldOutlined,
    HomeOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DeleteOutlined,
    DiffOutlined
  } from '@ant-design/icons';
  import { Layout, Menu, Button } from 'antd';
  import React, { useState } from 'react';
  const { Header, Sider, Content } = Layout;
  import Link from 'next/link'

function NavbarSide() {

    const [collapsed, setCollapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const logout = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/auth/logout", { method: "POST" });
        const data = await response.json();
        console.log(data.message)
        router.push("/")
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }

  return (
    <>
        <div className="logo">
            <h2 align="center" >KONI KP</h2>
          </div>
          <DeleteOutlined />
          <Menu
            theme="dark"
            mode="inline"
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link href="/DataWasit">Data Wasit</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link href="/DataPelatih">Data Pelatih</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link href="/DataAtlit">Data Atlit</Link>,
              },
              {
                key: "4",
                icon: <DiffOutlined />,
                label: <Link href="/DataSarpras">Data Sarpras</Link>,
              },
              {
                key: "5",
                icon: <HomeOutlined />,
                label: <Link href="/">Home</Link>,
              },
              {
                key: "6",
                label: <Button onClick={logout} disabled={isLoading}>
                {isLoading ? "Logging out..." : "Logout"}
              </Button>
              }
            ]}
          />
    </>
  )
}

export default NavbarSide