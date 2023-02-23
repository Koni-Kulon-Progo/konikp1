import React from 'react'
import Navbar from "../components/Navbar"
import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
            <Col span={24}>
                <h1 align="center">Visi & Misi</h1>
            </Col>
            <Col span={12} style={{marginTop: "200px"}}>
                <h1 align="center">Visi</h1>
                <h3 align="center">Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</h3>
            </Col>
            <Col span={12} style={{marginTop: "200px"}}>
                <h1 align="center">Misi</h1>
                <h3 align="center">1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</h3>
                <h3 align="center">2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</h3>
                <h3 align="center">3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</h3>
                <h3 align="center">4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</h3>
            </Col>
    </Row>
    </>
  )
}
