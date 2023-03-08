import React, {useState} from 'react';
import { Form, Input, Button,Col, Row } from 'antd';

function Login() {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const onFinish = (values) => {
    console.log('Berhasil:', values);
    // iki logic nggo validasi email ro password
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Gagal:', errorInfo);
  };

  return (
    <>
      <h2 align="center">Login Koni Kulon Progo</h2>
      <Row>
        <Col span={8} align="center"></Col>
        <Col span={8} align="end">
        <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'Please enter a valid email address!' },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item align="end">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
        </Col>
        <Col span={8} align="center">
          <h1>Email : {email}</h1>
          <h1>Password : {password}</h1>
        </Col>
      </Row>
    </>
  );
}

export default Login;
