import React from 'react'
import Navbar from "../components/Navbar"
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
            <Col span={24} style={{backgroundColor: "rgb(0, 35, 91)"}}>
                <Typography.Title level={1} style={{ color: "white" }} align="center">Visi & Misi</Typography.Title>
            </Col>
            <Col span={12} style={{ backgroundColor: "rgb(0, 35, 91)", paddingBottom: "485px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "white" }}>Visi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial', color: "white" }}>Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</Typography.Paragraph>
            </Col>
            <Col span={12} style={{ backgroundColor: "rgb(0, 35, 91)", paddingBottom: "485px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "white" }}>Misi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" }}>1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" }}>2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" }}>3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" }}>4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</Typography.Paragraph>
            </Col>
    </Row>
    </>
  )
}
