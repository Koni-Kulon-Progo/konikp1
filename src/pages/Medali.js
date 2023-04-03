import React,{useState} from 'react'
import {Col, Row} from 'antd'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Emas from '../assets/medaliEmas.png'

function Medali() {
  return (
    <>
    <Row>
      <Navbar />
      <Col span={24} style={{backgroundColor: "black", color: "white"}}>
        <h1 align="center">- PEROLEHAN MEDALI -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white'}}>33</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Emas} alt="medali emas" width={100} height={100} />
      <h1 style={{color: 'white'}}>36</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Emas} alt="medali emas" width={100} height={100} />
      <h1 style={{color: 'white'}}>52</h1>
      </Col>
    </Row>
    </>
  )
}

export default Medali