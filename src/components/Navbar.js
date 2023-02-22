import React from "react";
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import Link from "next/link";
import Image from "next/image";
import LogoKoni from '../assets/koni.jpg'

function Navbar() {
  return <>
  <Col span={12}>
  <Image
    width={50}
    src={LogoKoni}
  />
        </Col>
        <Col span={12} align="end">
          <Button danger><Link href="/DataAtlit">Dashboard</Link></Button>
        </Col>
    
  </>;
}

export default Navbar;
