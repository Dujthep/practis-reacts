import { Button, Checkbox, Flex, Form, Input } from 'antd';
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
    <Flex className="Hight-100" align="center" justify="center">
      <Form
        name="login"
        size="middle"
        style={{ width: '600px' }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
          {<TextBoxComponent id="login_username" type={TEXTBOX_TYPE.TEXT} />}
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <TextBoxComponent id="login_password" type={TEXTBOX_TYPE.PASSWORD} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ display: 'inline-block' }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Flex>
  );
};
