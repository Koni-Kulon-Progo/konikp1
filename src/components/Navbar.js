import React from "react";
import { Layout, Menu ,Col, Typography} from 'antd';
import Link from "next/link";
import Image from "next/image";
import { HomeOutlined,TrophyOutlined,ProfileOutlined,TeamOutlined,BellOutlined  } from "@ant-design/icons";
import LogoKoni from '../assets/koni.png'
const { Header } = Layout;
const { Title } = Typography;

function Navbar() {
  return <>
   <Header style={{  zIndex: 1, width: '100%'}}>
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', backgroundColor: 'black' }} className="navbar-menu">
        <Col span={12} className="navbar-col-1"><h1 className="navbar-h1">konikulonprogo.com</h1></Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }} className="navbar-col-2">
        <items key="home" style={{ marginRight: '20px' }}>
  <Link href="/" style={{color:"white"}}>
  <HomeOutlined className="navbar-logo"/>
    <h4 className="navbar-h4">Home</h4>
  </Link>
</items>
<items key="pengurus" style={{ marginRight: '20px' }}>
  <Link href="/Pengurus" style={{color:"white"}}>
  <ProfileOutlined className="navbar-logo"/>
    <h4 className="navbar-h4">Pengurus</h4>
  </Link>
</items>
<items key="news" style={{ marginRight: '20px' }}>
  <Link href="/News" style={{color:"white"}}>
  <BellOutlined className="navbar-logo"/>
    <h4 className="navbar-h4">News & Event</h4>
  </Link>
</items>
<items key="medali" style={{ marginRight: '20px' }}>
  <Link href="/Medali" style={{color:"white"}}>
  <TrophyOutlined className="navbar-logo"/>
    <h4 className="navbar-h4">Medali</h4>
  </Link>
</items>
<items key="dataatlit" style={{ marginRight: '20px' }}>
  <Link href="/userAdmin" style={{color:"white"}}>
  <TeamOutlined className="navbar-logo"/>
    <h4 className="navbar-h4">Dashboard</h4>
  </Link>
</items>
        </Col>
      </Menu>
    </Header>
  </>;
}

export default Navbar;
