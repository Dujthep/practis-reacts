import { Layout } from 'antd';
import React, { useState } from 'react';
import { Dashboard } from '../dashboard/Dashboard';
import { SideMenu } from './components/SideMenu';
import { TopMenu } from './components/TopMenu';

export const LayoutPage: React.FC<any> = ({ setAuthenticated }) => {
  const [col, setCol] = useState(false);

  return (
    <Layout
      style={{
        height: '100svh',
      }}
    >
      <SideMenu col={col} />
      <Layout>
        <TopMenu setAuthenticated={setAuthenticated} setCol={setCol} />
        <Dashboard />
      </Layout>
    </Layout>
  );
};
