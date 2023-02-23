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
import Image from 'next/image'


import { Layout, Menu , Button, Row, Col, Typography,Card} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar'
import Content from '../components/Content';
import Footer from '../components/Footer';
import LogoStruktur from '../assets/strukturkoni.png'

export default function Home() {
  
  return (
    <>
      <Row>
        <Navbar />
        <Row>
    <Col span={24}>
          <div style={{ display: 'flex', justifyContent: 'center',marginTop: '30px' }}>
            <Image src={LogoStruktur} width={290} alt="struktur koni"  />
          </div>
            <h1 align="center">Selayang Pandang</h1>
            <h3 align="center">Komite Olahraga Nasional Indonesia KONI Kabupaten Kulon Progo merupakan induk organiasi cabang olahraga yang menaungi sebanyak 45 cabang olahraga (cabor) dan 2 badan olahraga fungsional (Siwo PWI Kulon Progo dan Perwosi Kulon Progo). Pada kepengurusan KONI Kabupaten Kulon Progo masa bakti 2021-2025 yang dipimpin Kusdira BA., segala aktifitas dilakukan di sekretariatan kantor KONI Kulon Progo yang menempati salah satu ruangan di Stadion Cangkring Wates. Untuk kelancaran pelayanan dan administrasi, KONI Kabupaten Kulon Progo mempunyai 2 (dua) orang staf yang bertugas 
                setiap hari kerja 5 (lima) hari kerja yakni hari Senin sd Jum’at dengan jam kerja pukul 08.00 sd 15.00 WIB. Untuk pengendalian manajerial, KONI Kabupaten Kulon Progo menerapkan penugasan piket pengurus harian. Besar harapan kami seluruh data dan kegiatan yang diselenggarakan cabor anggota KONI Kulon Progo maupun pengurus dapat termuat dalam wibsite ini.
                Terimakasih dan salam olahraga……</h3>
        </Col>
    </Row>
        <Footer />
      </Row>
    </>
  )
}