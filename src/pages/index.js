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
    <Col span={24}>
          <div style={{ display: 'flex', justifyContent: 'center', }} className="backgrounde">
            {/* <Image src="/cangkring.webp" width={4090} height={700} alt="struktur koni"  /> */}
            <Col span={8} align="center">
              
            </Col>
            <Col span={8} align="start" style={{ marginTop: "200px"}}>
            <h3>INFORMASI PRESTASI & INDUSTRI OLAHRAGA</h3>
            <h1 style={{color: "red", fontSize: "46px"}}>KOMITE <br />OLAHRAGA<br />NASIONAL<br />INDONESIA</h1>
            <h2 style={{textAlign: "justify"}}>Komite Olahraga Nasional Indonesia (KONI) adalah satu-satunya organisasi yang berwenang dan bertanggung jawab mengelola, membina, mengembangkan & mengkoordinasikan seluruh pelaksanaan kegiatan olahraga prestasi setiap anggota di Indonesia.</h2>
            <Button style={{backgroundColor: "red", color: "white"}}>LEBIH LANJUT</Button>
            </Col>
            <Col span={8} align="center"></Col>
          </div>
        </Col>
    </Row>
    <Footer />
      </Row>
    </>
  )
}