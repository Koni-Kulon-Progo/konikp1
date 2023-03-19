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
import Koni from '../assets/koni.jpg'

export default function Home() {

  return (
    <>
      <Row>
        <Navbar />
        <Row className='row-box'>
          <Col xs={{ span: 12 }} md={{ span: 12 }} className="container-1">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde">
            <h1 style={{ fontSize: "70px", textAlign: 'start',margin: "0",paddingTop: "200px",color: "white", }} className="h1Koni">WEBSITE <br /> <span style={{ color: "red"}}>KONI</span> KULON PROGO</h1>
            <h2 style={{ fontSize: "20px", textAlign: "start",marginTop: "50px", color: "grey" }}>Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang<br /> berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.</h2>
            <Row>
            <Col span={12} align= "start">
            <Link href="/Sambutan"><Button style={{backgroundColor: "rgb(226, 24, 24)", color: "white" }} id="buttonIndex">LEBIH LANJUT</Button></Link>
            </Col>
            <Col span={12}>
            {/* <Link href="/Sambutan"><Button style={{backgroundColor: "rgb(226, 24, 24)", color: "white" }} id="buttonIndex">DASHBOARD</Button></Link> */}
            </Col>
            </Row>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 12 }} className="container-2">
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde1">
            <Image src={Koni} alt="Logo Koni Kulon Progo" width={400} height={400} style={{marginTop: "80px"}} />
            </div>
          </Col>
        </Row>
        <Footer />
      </Row>
    </>
  )
}