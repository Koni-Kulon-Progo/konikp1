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
import { Layout, Menu , Button, Row, Col, Typography,Card, Image} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Content from '../components/Content';
import Footer from '../components/Footer';
import LogoStruktur from '../../public/strukturkoni.png'

export default function Home() {

  return (
    <>
      <Row>
        <Navbar />
        <Row>
          <Col xs={{ span: 24 }} md={{ span: 24 }}>
            <div style={{ display: 'block', justifyContent: 'center',textAlign: "center" }} className="backgrounde">
            <h1 style={{ fontSize: "60px", textAlign: 'center',margin: "0",paddingTop: "200px",color: "white", }}>SELAMAT DATANG DI WEBSITE <br /> KONI KULON PROGO </h1>
            <h2 style={{ fontSize: "30px", textAlign: "center",marginTop: "100px", color: "white" }}>Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.</h2>
            <Link href="/Sambutan"><Button style={{ marginTop: "100px",backgroundColor: "rgb(226, 24, 24)", color: "white" }} id="buttonIndex">LEBIH LANJUT</Button></Link>
            </div>
          </Col>
        </Row>
        <Footer />
      </Row>
    </>
  )
}