import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

function RegisterPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    setLoading(true);
    console.log(form)
    setEmail(values.email);
    setPassword(values.password);
   
    // logic register e ng kene
    fetch('/api/register', {
      method: POST,
      Headers: {
        "content-Type" : "aplication/json"
      },
      body: JSON.stringify({email: values.email, password: values.password}),
    })
    .then((response) => {
      // handle seko backend
      setLoading(false);
    })
    .catch((error) => {
      console.log("error njing", error);
      setLoading(false);
    })
  };

  return (
    <div>
      <h1>Register Form</h1>
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid email address',
            },
            {
              required: true,
              message: 'Please input your email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>

      <div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>
    </div>
  );
}

export default RegisterPage;
