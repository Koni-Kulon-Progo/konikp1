import React from 'react'
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import { HomeOutlined,MobileOutlined,MailOutlined,WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>
        <Col span={6} style={{backgroundColor: "transparent"}}>
            <h2 align='center'><HomeOutlined /><br />asdasd</h2>
        </Col>
        <Col span={6}>
            <h2 align='center'><MobileOutlined /><br />(0274) 773094</h2>
        </Col>
        <Col span={6} >
            <h2 align='center'><MailOutlined /><br />konikulonprogo@gmail.com</h2>
        </Col>
        <Col span={6} >
            <h2 align='center'><WhatsAppOutlined /><br />089727272736</h2>
            
        </Col>
    </>
  )
}

export default Footer