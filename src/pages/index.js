import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu , Button, Row, Col, Typography,} from 'antd';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // const {h1} = Typography;
  
  return (
    <>
      <Row>
        <Col span={12}>
          <h1 align="center">iki logo koni</h1>
        </Col>
        <Col span={12} align="center">
          <Button>Dashboard</Button>
        </Col>
      </Row>
    </>
  )
}