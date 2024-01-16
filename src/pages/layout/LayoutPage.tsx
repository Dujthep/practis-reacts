import { Layout } from 'antd';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SideBarComponent } from '../../components/SideBarComponent';
import { TopBarComponent } from '../../components/TopBarComponent';
import { Dashboard } from '../dashboard/Dashboard';
import { Graph } from '../graph/Graph';
import { Profile } from '../profile/Profile';

export const LayoutPage: React.FC<any> = ({ setAuthenticated }) => {
  const [col, setCol] = useState(false);

  return (
    <Layout
      style={{
        height: '100dvh',
      }}
    >
      <BrowserRouter>
        <SideBarComponent />
        <Layout>
          <TopBarComponent
            setAuthenticated={setAuthenticated}
            setCol={setCol}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Dashboard />} />
            <Route path="/graph" element={<Graph />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};
