import React from "react";
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import Link from "next/link";
import Image from "next/image";
import LogoKoni from '../assets/koni.jpg'
const { Header } = Layout;
const { Title } = Typography;

const clickHandle = () => {
  console.log("iki pencetan dashboard")
}

function Navbar() {
  return <>
   <Header style={{  zIndex: 1, width: '100%'}}>
      <Row justify="space-between" align="middle">
        <Col>
          <Image src={LogoKoni} alt="Logo KONI" width={60} height={60}  />
        </Col>
        <Col>
          <Title level={2} style={{ color: '#000', marginBottom: 0 }}>
            KONI KULON PROGO
          </Title>
          <Title level={5} style={{ color: '#000', marginTop: 0 ,textAlign:"center"}} type="warning">
            Komite Olahraga Nasional Indonesia
          </Title>
        </Col>
        <Col>
          <Link href="/LoginPage">
            <Button type="primary" onClick={clickHandle} id="buttonNavbar">Dashboard</Button>
          </Link>
        </Col>
      </Row>
      <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
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
        <Menu.Item key="contact">
          <Link href="/Medali">
            <h4>Medali</h4>
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  </>;
}

export default Navbar;
