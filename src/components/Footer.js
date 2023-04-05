import React from 'react'
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import { PushpinOutlined,MobileOutlined,MailOutlined,WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>
        <Col xs={{ span: 24 }} xl={{span : 6}}  style={{backgroundColor: "black", color: "grey"}}>
        <h4 align='center'><PushpinOutlined style={{color: "white", fontSize: "25px"}}/><br />
        <a href="https://api.whatsapp.com/send?phone=6281234567890" style={{ color: "red"}}>Wates , Kulon Progo, Yogyakarta</a>
            </h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}} style={{backgroundColor: "black", color: "grey"}}>
            <h4 align='center'><MobileOutlined style={{color: "white", fontSize: "25px"}}/><br /><a href="https://api.whatsapp.com/send?phone=6281234567890" style={{ color: "red"}}>081234567890</a></h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}}  style={{backgroundColor: "black", color: "grey"}}>
            <h4 align='center'><MailOutlined style={{color: "white", fontSize: "25px"}}/><br /><a href="mailto:konikulonprogo@gmail.com" style={{color: "red"}}>konikulonprogo@gmail.com</a></h4>
        </Col>
        <Col xs={{ span: 24 }} xl={{span : 6}} style={{backgroundColor: "black", color: "grey"}}>
            <h4 align='center'><WhatsAppOutlined style={{color: "white", fontSize: "25px"}}/><br /><a href="https://wa.me/6281234567890" style={{color: "red"}}>081234567890</a>
</h4>  
        </Col>
    </>
  )
}

export default Footer