import React from 'react'
import { Layout, Menu, Row, Col, Divider, Table, Form, Modal, Input, Button, Select} from 'antd';
import Navbar from '../components/Navbar'


function Sambutan() {
  return (
    <>
    <Row>
      <Navbar />
    </Row>
    <Row>
      <Col span={24}>
        <h1 align="center">Sambutan Ketua Umum</h1>
        <Row>
          <Col span={8}>1</Col>
          <Col span={8}>2</Col>
          <Col span={8}>3</Col>
        </Row>
      </Col>
    </Row>
    </>
  )
}

export default Sambutan