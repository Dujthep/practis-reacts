import React, { useState } from 'react';
import { AuthService } from '../../services/AuthService';
import { LayoutPage } from '../layout/LayoutPage';
import { Login } from '../login/Login';
import { ConfigProvider } from 'antd';

type UserInformation = {
  name: string;
  role: string;
} | null;

export const HomePage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(AuthService.checkAuth());

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00b96b',
          borderRadius: 2,

          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}
    >
      <>
        {authenticated ? (
          <LayoutPage setAuthenticated={setAuthenticated} />
        ) : (
          <Login setAuthenticated={setAuthenticated} />
        )}
      </>
    </ConfigProvider>
  );
};
