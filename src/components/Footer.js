import React from 'react'
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import { HomeOutlined,MobileOutlined,MailOutlined,WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>
        <Col xs={{ span: 24 }} xl={{span : 6}}  style={{backgroundColor: "rgb(0,21,41)", color: "grey"}}>
            <h4 align='center'><HomeOutlined /><br />
                Jl. Kweni No.5, Turip, Ngestiharjo, Wates Kulonprogo, Yogyakarta
            </h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}} style={{backgroundColor: "rgb(0,21,41)", color: "grey"}}>
            <h4 align='center'><MobileOutlined /><br />(0274) 773094</h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}}  style={{backgroundColor: "rgb(0,21,41)", color: "grey"}}>
            <h4 align='center'><MailOutlined /><br />konikulonprogo@gmail.com</h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}} style={{backgroundColor: "rgb(0,21,41)", color: "grey"}}>
            <h4 align='center'><WhatsAppOutlined /><br />089727272736</h4>  
        </Col>
    </>
  )
}

export default Footer