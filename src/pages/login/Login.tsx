import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { AuthService } from '../../services/AuthService';
import {
  TEXTBOX_TYPE,
  TextBoxComponent,
} from '../../components/TaxtBoxComponent';

type LoginForm = {
  username: string;
  password: string;
  remember: boolean;
};

export const Login: React.FC<any> = ({ setAuthenticated }) => {
  const onFinish = (values: LoginForm, setAuthenticated: any) => {
    console.log(values);
    AuthService.setCurrenUser(values.username);
    setAuthenticated(AuthService.checkAuth());
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={(values) => onFinish(values, setAuthenticated)}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {<TextBoxComponent type={TEXTBOX_TYPE.TEXT} />}
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <TextBoxComponent type={TEXTBOX_TYPE.PASSWORD} />
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
