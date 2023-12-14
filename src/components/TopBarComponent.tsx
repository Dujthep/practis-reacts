import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Row, theme } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { AuthService } from '../services/AuthService';
import { signal } from '@preact/signals';
import { collapsed } from '../pages/layout/services/LayoutPageService';

const onLogout = (setAuthenticated: any) => {
  AuthService.removeUser();
  setAuthenticated(AuthService.checkAuth());
};

const onChangeCollapsed = (value: boolean, setCol: any) => {
  collapsed.value = !value;
  setCol(!value);
};

export const TopBarComponent: React.FC<any> = ({
  setAuthenticated,
  setCol,
}) => {
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
          icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
          onClick={() => onChangeCollapsed(collapsed.value, setCol)}
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
