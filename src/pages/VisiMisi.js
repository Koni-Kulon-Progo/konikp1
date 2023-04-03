import React from 'react'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import {Row, Col, Typography} from 'antd';

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
            <Col span={24} style={{backgroundColor: " black"}}>
                <Typography.Title level={1} style={{ color: "white" }} align="center">Visi & Misi</Typography.Title>
            </Col>
            <Col span={12} style={{ backgroundColor: " black", paddingBottom: "335px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red", fontSize: "50px" }}>Visi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial', color: "white", fontSize: "20px" }}>Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</Typography.Paragraph>
            </Col>
            <Col span={12} style={{ backgroundColor: " black", paddingBottom: "356px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red",fontSize: "50px" }}>Misi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white",fontSize:  "20px" }}>1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }}>2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }}>3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }}>4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</Typography.Paragraph>
            </Col>
            <Footer />
    </Row>
    </>
  )
}
