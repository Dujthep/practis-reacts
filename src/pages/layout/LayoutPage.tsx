import { Layout } from 'antd';
import React, { useState } from 'react';
import { SideBarComponent } from '../../components/SideBarComponent';
import { TopBarComponent } from '../../components/TopBarComponent';
import { Dashboard } from '../dashboard/Dashboard';

export const LayoutPage: React.FC<any> = ({ setAuthenticated }) => {
  const [col, setCol] = useState(false);

  return (
    <Layout
      style={{
        height: '100svh',
      }}
    >
      <SideBarComponent />
      <Layout>
        <TopBarComponent setAuthenticated={setAuthenticated} setCol={setCol} />
        <Dashboard />
      </Layout>
    </Layout>
  );
};
