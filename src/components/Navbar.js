import React from "react";
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import Link from "next/link";
import Image from "next/image";
import LogoKoni from '../assets/koni.jpg'
const { Header } = Layout;
const { Title } = Typography;

function Navbar() {
  return <>
   <Header style={{  zIndex: 1, width: '100%'}}>
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', backgroundColor: 'black' }}>
        <Col span={12}><h1>konikulonprogo.com</h1></Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <items key="home" style={{ marginRight: '20px' }}>
  <Link href="/" style={{color:"white"}}>
    <h4>Home</h4>
  </Link>
</items>
<items key="visimisi" style={{ marginRight: '20px' }}>
  <Link href="/VisiMisi" style={{color:"white"}}>
    <h4>Visi & Misi</h4>
  </Link>
</items>
<items key="news" style={{ marginRight: '20px' }}>
  <Link href="/News" style={{color:"white"}}>
    <h4>News & Event</h4>
  </Link>
</items>
<items key="medali" style={{ marginRight: '20px' }}>
  <Link href="/Medali" style={{color:"white"}}>
    <h4>Medali</h4>
  </Link>
</items>
<items key="dataatlit" style={{ marginRight: '20px' }}>
  <Link href="/DataAtlit" style={{color:"white"}}>
    <h4>Dashboard</h4>
  </Link>
</items>

        </Col>
      </Menu>
    </Header>
  </>;
}

export default Navbar;
