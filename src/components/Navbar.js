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
        <Col span={12}><h1>KONI KULON PROGO</h1></Col>
        <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Menu.Item key="home">
          <Link href="/">
            <h4>Home</h4>
          </Link>
        </Menu.Item>
        <Menu.Item key="visimisi">
          <Link href="/VisiMisi">
            <h4>Visi & Misi</h4>
          </Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link href="/News">
            <h4>News & Event</h4>
          </Link>
        </Menu.Item>
        <Menu.Item key="medali">
          <Link href="/Medali">
            <h4>Medali</h4>
          </Link>
        </Menu.Item>
        <Menu.Item key="dataatlit">
          <Link href="/DataAtlit">
            <h4>Dashboard</h4>
          </Link>
        </Menu.Item>
        </Col>
        {/* <Col span={8}>
          <Link href="/DataAtlit">
            <Button style={{backgroundColor: "rgb(226, 24, 24)", color: "white"}} id="buttonNavbar">Dashboard</Button>
          </Link>
        </Col> */}
      </Menu>
    </Header>
  </>;
}

export default Navbar;
