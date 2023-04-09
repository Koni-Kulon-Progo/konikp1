import React,{useState} from 'react'
import {Col, Row} from 'antd'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Emas from '../assets/medaliEmas.png'
import Perak from '../assets/medaliPerak.png'
import Perunggu from '../assets/medaliPerunggu.png'

function Medali() {
  return (
    <>
    <Row>
      <Navbar />
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid red",}}>
        <h1 align="center">PEROLEHAN MEDALI<br />- POPDA 2023 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>33</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>36</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>52</h1>
      </Col>
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid white",}}>
        <h1 align="center" style={{color: "red"}}>PEROLEHAN MEDALI<br />- PORDA 2023 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>33</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>36</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>52</h1>
      </Col>
    </Row>
    </>
  )
}

export default Medali