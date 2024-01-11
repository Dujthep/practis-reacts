import { Layout } from 'antd';
import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SideBarComponent } from '../../components/SideBarComponent';
import { TopBarComponent } from '../../components/TopBarComponent';
import { Dashboard } from '../dashboard/Dashboard';
import { Graph } from '../graph/Graph';
import { Profile } from '../profile/Profile';
import { createContext } from 'vm';

type LayoutContextProp = {
  url: string;
};

// const LayoutContext = createContext();

export const LayoutPage: React.FC<any> = ({ setAuthenticated }) => {
  const [col, setCol] = useState(false);

  return (
    // <LayoutContext.Provider value={{}}>
    <Layout
      style={{
        height: '100dvh',
      }}
    >
      <SideBarComponent />
      <Layout>
        <TopBarComponent setAuthenticated={setAuthenticated} setCol={setCol} />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="graph" element={<Graph />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Layout>
    </Layout>
    // </LayoutContext.Provider>
  );
};
