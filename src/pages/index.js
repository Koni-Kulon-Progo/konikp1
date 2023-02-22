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

export default function Home() {
  // const {h1} = Typography;
  
  return (
    <>
      <Row>
        <Navbar />
        <Content />
        <Footer />
      </Row>
    </>
  )
}