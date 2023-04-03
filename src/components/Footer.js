import React from 'react'
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import { HomeOutlined,MobileOutlined,MailOutlined,WhatsAppOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <>
        <Col xs={{ span: 24 }} xl={{span : 6}}  style={{backgroundColor: "black", color: "grey"}}>
        <h4 align='center'><HomeOutlined style={{color: "white", fontSize: "25px"}}/><br />
                <a href="https://www.google.com/maps/place/Komite+Olahraga+Nasional+Indonesia+(KONI)+Kabupaten+Kulon+Progo/@-7.8949617,110.1322491,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7ae35401bcbcd3:0xa3b4b29a134ef1a6!8m2!3d-7.894967!4d110.1344378!16s%2Fg%2F1pzrjpmd3" style={{color: "red"}} target="_blank">Wates, Kulonprogo, Yogyakarta</a>
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