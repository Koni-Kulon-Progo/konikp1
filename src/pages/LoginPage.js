import React, { useState } from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useRouter} from 'next/router'
import Koni from '../images/konikp.png';
import Image from "next/image";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (values) => {
    const credentials = { username, password };
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })

    if(response.ok) {
      router.push('/DataPelatih')
    } else {
      alert('Salah blok goblok');
      
    }
  }


  return (
    <Row justify="center" >
      <Col xs={24} sm={18} md={12} lg={8}>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={Koni} alt="Logo KONI" width={400} height={240} style={{ objectFit: "contain" }} />
        </div>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default LoginPage;
