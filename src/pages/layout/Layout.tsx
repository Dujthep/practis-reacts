import { Button } from 'antd';
import React from 'react';
import { AuthService } from '../../services/AuthService';
import { Dashboard } from '../dashboard/Dashboard';
import { TopMenu } from './components/TopMenu';
import { SideMenu } from './components/SideMenu';

const onLogout = (setAuthenticated: any) => {
  AuthService.removeUser();
  setAuthenticated(AuthService.checkAuth());
};

export const Layout: React.FC<any> = ({ setAuthenticated }) => {
  return (
    <>
      <TopMenu />
      <SideMenu />
      <Button onClick={() => onLogout(setAuthenticated)}>Logout</Button>
      <Dashboard />
    </>
  );
};
