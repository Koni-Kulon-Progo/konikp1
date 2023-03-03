import React from 'react';
import { Form, Input, Button,Col, Row } from 'antd';

function Login() {
  const onFinish = (values) => {
    console.log('Berhasil:', values);
    // iki logic nggo validasi email ro password
  };

  const onFinishFailed = (errorInfo) => {
    alert("wuuuu goblok lali password")
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item align="end">
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
        </Col>
        <Col span={8} align="center"></Col>
      </Row>
    </>
  );
}

export default Login;
