import {
  TeamOutlined
} from '@ant-design/icons';
import {
  blue
} from "@ant-design/colors"
import { Button, Row, Col, Typography} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Image from 'next/image';
import Footer from '../components/Footer';
import Koni from '../assets/koni.png'
import Wave from '../assets/wave.svg'

export default function Home() {

  return (
    <>
      <Row >
        <Navbar />
        <Row className='row-box'>
        <Col xs={{ span: 24 }} md={{ span: 24 }} className="container-2">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde1">
            <Image src={Koni} alt="Logo Koni Kulon Progo" width={250} height={250} style={{marginTop: "80px"}} className="header-img-koni" />
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 24 }} className="container-1">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde">
            <h1 style={{ fontSize: "75px", textAlign: 'center',margin: "0",paddingTop: "54px",color: "white", }} className="h1Koni"> <span style={{ color: "red"}}>KONI</span> KULON PROGO</h1>
            <h2 style={{ fontSize: "20px", textAlign: "justify", color: "grey", paddingBottom: "65px", paddingLeft: "30%", paddingRight: "30%" }} className="h2-komite">Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
            <br />
            <span style={{display: "flex",textAlign: "start", marginTop: "15px", paddingBottom: "70px"}} className="header-span-button">
            <Link href="/Sambutan"><Button type='primary' className='btn-header' danger id="buttonIndex" style={{marginBottom: "40px"}}>LEBIH LANJUT</Button></Link>
            </span></h2>
            </div>
          </Col>
          <Col span={8} style={{textAlign : "center",paddingLeft: "10%",paddingRight: "10%",backgroundColor: "black"}} className="div-atlit">
            <div style={{border: "3px solid red", borderRadius: "5%",display: "flex",justifyContent: "space-around"}}>
              <TeamOutlined style={{fontSize : "50px", justifyContent:"center", alignItems: "center", textAlign: "center", display: "flex", color: "white",}}/>
              <h1 style={{color: "white"}}>Atlit <br /> 246</h1>
            </div>
          </Col>
          <Col span={8} style={{textAlign : "center",paddingLeft: "10%",paddingRight: "10%",backgroundColor: "black"}} className="div-atlit">
            <div style={{border: "3px solid red", borderRadius: "5%",display: "flex",justifyContent: "space-around" }}>
              <TeamOutlined style={{fontSize : "50px", justifyContent:"center", alignItems: "center", textAlign: "center", display: "flex", color: "white",}}/>
              <h1 style={{color: "white"}}>Atlit <br /> 246</h1>
            </div>
          </Col>
          <Col span={8} style={{textAlign : "center",paddingLeft: "10%",paddingRight: "10%",backgroundColor: "black"}} className="div-atlit">
            <div style={{border: "3px solid red", borderRadius: "5%",display: "flex",justifyContent: "space-around"}} >
              <TeamOutlined style={{fontSize : "50px", justifyContent:"center", alignItems: "center", textAlign: "center", display: "flex", color: "white",}}/>
              <h1 style={{color: "white"}}>Atlit <br /> 246</h1>
            </div>
          </Col>
          <Col span={12} xs={12} style={{ backgroundColor: " black", paddingBottom: "335px",paddingTop: "200px"}} align="center" className='col-visi'>
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red", fontSize: "50px"}} className="visi">Visi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial', color: "white", fontSize: "20px" }} className="visimisi">Terwujudnya Prestasi Olahraga Kulon Progo yang unggul di Daerah dan Nasional</Typography.Paragraph>
            </Col>
            <Col span={12} xs={12} style={{ backgroundColor: " black", paddingBottom: "356px",paddingTop: "200px"}} align="center" className='col-misi'>
                <Typography.Title level={2} style={{ fontFamily: 'Arial', color: "red",fontSize: "50px" }} className="misi">Misi</Typography.Title>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white",fontSize:  "20px" }} className="visimisi">1. Mewujudkan manajemen organisasi dan tata kelola KONI Kulon Progo yang bersih dan akuntabel</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">2. Mengembangkan pembinaan dan pelatihan olahraga prestasi yang baik, sistematis, berjenjang dan berkesinambungan</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">3. Meningkatkan kualitas Sumber Daya Manusia pelaku olahraga</Typography.Paragraph>
                <Typography.Paragraph style={{ fontFamily: 'Arial',color: "white" ,fontSize: "20px" }} className="visimisi">4. Meningkatkan kesejahteraan pelaku olahraga yang berprestasi dan berdedikasi</Typography.Paragraph>
            </Col>
        </Row>
        <Footer />
      </Row>
    </>
  )
}
