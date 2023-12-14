import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Row, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import { AuthService } from '../services/AuthService';

const onLogout = (setAuthenticated: any) => {
  AuthService.removeUser();
  setAuthenticated(AuthService.checkAuth());
};

export const TopBarComponent: React.FC<any> = ({ setAuthenticated }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Header
      style={{ padding: '0px 20px 0px 0px', background: colorBgContainer }}
    >
      <Row align="middle">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          // onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <label
          style={{
            marginRight: 'auto',
          }}
        >
          TEST HEADER
        </label>
        <Button onClick={() => onLogout(setAuthenticated)}>Logout</Button>
      </Row>
    </Header>
  );
};
