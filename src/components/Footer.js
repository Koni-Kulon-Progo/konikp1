import React from 'react'
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import { HomeOutlined,MobileOutlined,MailOutlined,WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>
        <Col span={6}>
            <h2 align='center'><HomeOutlined /></h2>
            <h4 align="center">Jl. Kweni No.5, Turip, Ngestiharjo, Wates Kulonprogo, Yogyakarta</h4>
        </Col>
        <Col span={6}>
            <h2 align='center'><MobileOutlined /></h2>
            <h4 align="center">(0274) 773094</h4>
        </Col>
        <Col span={6}>
            <h2 align='center'><MailOutlined /></h2>
            <h4 align="center">konikulonprogo@gmail.com</h4>
        </Col>
        <Col span={6}>
            <h2 align='center'><WhatsAppOutlined /></h2>
            <h4 align="center">089727272736</h4>
        </Col>
    </>
  )
}

export default Footer