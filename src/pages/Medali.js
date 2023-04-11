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
      {/* porda 2013 */}
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid red",}}>
        <h1 align="center">PEROLEHAN MEDALI<br />- PORDA 2013 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>20</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>26</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>64</h1>
      </Col>
      {/* porda 2015 */}
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid white",}}>
        <h1 align="center" style={{color: "white"}}>PEROLEHAN MEDALI<br />- PORDA 2015 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>22</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>39</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>74</h1>
      </Col>
      {/* porrda 2017 */}
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid yellow",}}>
        <h1 align="center">PEROLEHAN MEDALI<br />- PORDA 2017 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>32</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>28</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>70</h1>
      </Col>
      {/* porda 2019 */}
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid red",}}>
        <h1 align="center">PEROLEHAN MEDALI<br />- PORDA 2019 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>40</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>28</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>64</h1>
      </Col>
      {/* porda 2022 */}
      <Col span={24} style={{backgroundColor: "black", color: "white",border: "2px solid white",}}>
        <h1 align="center">PEROLEHAN MEDALI<br />- PORDA 2022 -</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}} >
        <Image src={Emas} alt="medali emas" width={100} height={100} className="box1" />
        <h1 style={{color: 'white', fontSize: "40px"}}>31</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black" , textAlign: "center"}}>
      <Image src={Perak} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>46</h1>
      </Col>
      <Col span={8} style={{backgroundColor:"black", textAlign: "center"}}>
      <Image src={Perunggu} alt="medali emas" width={100} height={100} className="box1"/>
      <h1 style={{color: 'white', fontSize: "40px"}}>91</h1>
      </Col>
    </Row>
    </>
  )
}

export default Medali