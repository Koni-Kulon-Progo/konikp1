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
            <h3 style={{ fontSize: "30px", textAlign: 'center',margin: "0",paddingTop: "200px",color: "red" }}>INFORMASI PRESTASI <br />& <br /> INDUSTRI OLAHRAGA</h3>
            <h2 style={{ textAlign: "center",marginTop: "100px" }}>Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.</h2>
            <Link href="/Sambutan"><Button style={{ backgroundColor: "red", color: "white",marginTop: "100px" }} id="buttonIndex">LEBIH LANJUT</Button></Link>
            </div>
          </Col>
        </Row>
        <Footer />
      </Row>
    </>
  )
}