import { Button, Layout } from 'antd';
import React from 'react';
import { AuthService } from '../../services/AuthService';
import { Dashboard } from '../dashboard/Dashboard';
import { TopMenu } from './components/TopMenu';
import { SideMenu } from './components/SideMenu';

export const LayoutPage: React.FC<any> = ({ setAuthenticated }) => {
  return (
    <Layout
      style={{
        height: '100svh',
      }}
    >
      <SideMenu />
      <Layout>
        <TopMenu setAuthenticated={setAuthenticated} />
        <Dashboard />
      </Layout>
    </Layout>
  );
};
