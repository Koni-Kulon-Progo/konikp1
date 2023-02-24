import React from 'react'
import Navbar from "../components/Navbar"
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
            <Col span={24}>
                <Typography.Title level={1} style={{ fontFamily: 'monospace' }} align="center">Visi & Misi</Typography.Title>
            </Col>
            <Col span={12} style={{marginTop: "200px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial' }}>Visi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial' }}>Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</Typography.Paragraph>
            </Col>
            <Col span={12} style={{marginTop: "200px"}} align="center">
                <Typography.Title level={2} style={{ fontFamily: 'Arial' }}>Misi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial' }}>1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial' }}>2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial' }}>3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial' }}>4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</Typography.Paragraph>
            </Col>
    </Row>
    </>
  )
}
