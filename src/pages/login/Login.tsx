import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { AuthService } from '../../services/AuthService';
import { NavigateFunction, useNavigate } from 'react-router-dom';

type LoginForm = {
  username: string;
  password: string;
  remember: boolean;
};

const onFinish = (values: LoginForm, navigate: NavigateFunction) => {
  AuthService.setCurrenUser(values.username);
  navigate('/dashboard');
};

export const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={(values) => onFinish(values, navigate)}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
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

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
