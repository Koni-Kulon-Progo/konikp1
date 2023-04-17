import React from 'react'
import Navbar from "../components/Navbar"
import {Row, Col, Typography} from 'antd';
import Image from 'next/image';
import Kosong from '../assets/kosong.jpeg'

export default function VisiMisi() {
  return (
    <>
    <Row>
        <Navbar />
        {/* Ketua & Wakli Ketua */}
            <Col span={12} style={{textAlign: "center",backgroundColor: "black"}}>
            <h2 style={{color : "white"}} className="h2-pengurus">KETUA</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">KUSDIRA, BA</h2>
            </Col>
            <Col span={12} style={{textAlign: "center", backgroundColor: "black"}} >
            <h2 style={{color : "white"}} className="h2-pengurus">WAKIL KETUA</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">Drs. SUJIRAN</h2>
            </Col>

        {/* Sekum */}
        <Col span={12} style={{textAlign: "center", backgroundColor: "black"}} >
        <h2 style={{color : "white"}} className="h2-pengurus">SEKRETARIS UMUM</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">HERU SARJANA, S.pd</h2>
            </Col>
            <Col span={12} style={{textAlign: "center", backgroundColor: "black"}} >
        <h2 style={{color : "white"}} className="h2-pengurus">WAKIL SEKRETARIS UMUM</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">SUBARDI, S.pd</h2>
            </Col>

            {/* Bendahara  */}
            <Col span={12} style={{textAlign: "center", backgroundColor: "black"}} >
        <h2 style={{color : "white"}} className="h2-pengurus">BENDAHARA</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">HERU SARJANA, S.pd</h2>
            </Col>
            <Col span={12} style={{textAlign: "center", backgroundColor: "black"}} >
        <h2 style={{color : "white"}} className="h2-pengurus">WAKIL BENDAHARA</h2>
            <Image className="image-pengurus" src={Kosong} width={300} height={300} />
            <h2 style={{color: "white"}} className="h2-pengurus">SUBARDI, S.pd</h2>
            </Col>
    </Row>
    </>
  )
}
