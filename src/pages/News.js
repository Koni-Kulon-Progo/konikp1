import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Col, Row } from 'antd'
import LogoNews from '../assets/logoporda.png'
import Image from 'next/image'
import { Carousel } from 'antd';
import Kewr from '../assets/kewr foundation.png'
import Koni from '../assets/koni.jpg'


function News() {

  const images = [
    {
      id: 1,
      url: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/acre.svg'
    },
    {
      id: 2,
      url: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'
    },
    {
      id: 3,
      url: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/irisnet/images/iris.svg'
    },
    {
      id: 4,
      url: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/8ball/images/8ball.svg'
    },
    {
      id: 5,
      url: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg'
    }

  ];

  return (
    <>
     <Row>
        <Navbar />
        <Row>
    <Col span={24} style={{ backgroundColor: " rgb(0,21,41)", color: "white"}}>
    <Carousel autoplay>
      {images.map((image) => (
        <Col span={24} align="center">
          <img src={image.url} alt="gambar" width="300" height="200" />
        </Col>
      ))}
    </Carousel>
            <h1 align="center">News & Event</h1>
            <h3 align="center">Komite Olahraga Nasional Indonesia KONI Kabupaten Kulon Progo merupakan induk organiasi cabang olahraga yang menaungi sebanyak 45 cabang olahraga (cabor) dan 2 badan olahraga fungsional (Siwo PWI Kulon Progo dan Perwosi Kulon Progo). Pada kepengurusan KONI Kabupaten Kulon Progo masa bakti 2021-2025 yang dipimpin Kusdira BA., segala aktifitas dilakukan di sekretariatan kantor KONI Kulon Progo yang menempati salah satu ruangan di Stadion Cangkring Wates. Untuk kelancaran pelayanan dan administrasi, KONI Kabupaten Kulon Progo mempunyai 2 (dua) orang staf yang bertugas 
                setiap hari kerja 5 (lima)</h3>
        </Col>
        <Col span={12} xs={{span:12}} align="center" style={{ backgroundColor: " rgb(0,21,41)"}}>
            <Image src={Kewr} width={290} alt="gambar porda"/>
        </Col>
        <Col span={12} xs={{span:12}} align="center" style={{ backgroundColor: " rgb(0,21,41)", color: "white"}}>
            <h2>IKI JUDULE</h2>
            <p>IKI tanggal</p>
            <h3>IKI ISINE</h3>
        </Col>
        <Col span={12} xs={{span:12}} align="center" style={{ backgroundColor: " rgb(0,21,41)"}}>
        <Image src={Kewr} width={290} alt="gambar porda"/>
        </Col>
        <Col span={12} xs={{span:12}} align="center" style={{ backgroundColor: " rgb(0,21,41)", color: "white"}}>
          <h2>IKI JUDULE</h2>
          <p>IKI tanggal</p>
          <h3>IKI ISINE</h3>
        </Col>
    </Row>
        <Footer />
      </Row>
    </>
  )
}

export default News