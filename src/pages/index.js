import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  blue
} from "@ant-design/colors"
import { Layout, Menu , Button, Row, Col, Typography,Card,} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Image from 'next/image';
import Footer from '../components/Footer';
import Koni from '../assets/koni.png'

export default function Home() {

  return (
    <>
      <Row>
        <Navbar />
        <Row className='row-box'>
        <Col xs={{ span: 24 }} md={{ span: 24 }} className="container-2">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde1">
            <Image src={Koni} alt="Logo Koni Kulon Progo" width={250} height={250} style={{marginTop: "80px"}} />
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 24 }} className="container-1">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde">
            <h1 style={{ fontSize: "75px", textAlign: 'center',margin: "0",paddingTop: "93px",color: "white", }} className="h1Koni"> <span style={{ color: "red"}}>KONI</span> KULON PROGO</h1>
            <h2 style={{ fontSize: "20px", textAlign: "justify",marginTop: "50px", color: "grey", paddingBottom: "35px", paddingLeft: "30%", paddingRight: "30%" }}>Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.
            <br />
            <span style={{display: "flex",textAlign: "start", marginTop: "15px"}}>
            <Link href="/Sambutan"><Button type='primary' danger id="buttonIndex" style={{marginBottom: "40px"}}>LEBIH LANJUT</Button></Link>
            </span></h2>
            <Row>
            </Row>
            </div>
          </Col>
        </Row>
        <Footer />
      </Row>
    </>
  )
}