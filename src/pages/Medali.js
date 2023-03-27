import React,{useState} from 'react'
import {Col, Row} from 'antd'
import Navbar from '@/components/Navbar'

function Medali() {

  const [tampil, setTampil ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setTampil("wasap")
  }



  return (
    <>
    <Row>
      <Navbar />
      <Col span={24}>
        <h1 align="center">Halaman Perolehan Medali</h1>
      </Col>
    </Row>
    </>
  )
}

export default Medali