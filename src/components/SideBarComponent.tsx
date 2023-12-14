import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { collapsed } from '../pages/layout/services/LayoutPageService';
import { effect } from '@preact/signals';
import { useEffect } from 'react';

export const SideBarComponent: React.FC<any> = ({ col }) => {
  const isCollapsed: boolean = collapsed.value;

  useEffect(() => {
    console.log(isCollapsed);
  }, [isCollapsed]);

  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed}>
      <div className="demo-logo-vertical" />
      {col}
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            // icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            // icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            // icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
    </Sider>
  );
};
