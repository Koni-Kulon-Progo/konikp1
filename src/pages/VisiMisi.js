import React from 'react'
import Navbar from "../components/Navbar"
import {Row, Col, Typography} from 'antd';

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
            <Col span={12} xs={24} style={{ backgroundColor: " black", paddingBottom: "335px"}} align="center" className='col-visi'>
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red", fontSize: "50px"}} className="visi">Visi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial', color: "white", fontSize: "20px" }} className="visimisi">Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</Typography.Paragraph>
            </Col>
            <Col span={12} xs={24} style={{ backgroundColor: " black", paddingBottom: "356px"}} align="center" className='col-misi'>
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red",fontSize: "50px" }} className="misi">Misi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white",fontSize:  "20px" }} className="visimisi">1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</Typography.Paragraph>
            </Col>
            
    </Row>
    </>
  )
}
