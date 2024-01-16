import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { collapsed, url } from '../pages/layout/services/LayoutPageService';
import { useNavigate } from 'react-router-dom';

type MenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
  url: string;
};

const menus: MenuItem[] = [
  { key: 'home', label: 'Home', icon: <UserOutlined />, url: '' },
  { key: 'graph', label: 'Graph', icon: <UserOutlined />, url: 'graph' },
  { key: 'profile', label: 'Profile', icon: <UserOutlined />, url: 'profile' },
  {
    key: '3',
    label: 'nav 3',
    icon: <UserOutlined />,
    children: [
      { key: '3_1', label: 'child 3_1', url: '3_1' },
      { key: '3_2', label: 'child 3_2', url: '3_2' },
      { key: '3_3', label: 'child 3_3', url: '3_3' },
    ],
    url: '3',
  },
];

const findMenuItemByKey = (items: MenuItem[], keyToFind: string): MenuItem => {
  for (const item of items) {
    if (item.key === keyToFind) {
      return item;
    }

    if (item.children) {
      const foundInChildren = findMenuItemByKey(item.children, keyToFind);
      if (foundInChildren) {
        return foundInChildren;
      }
    }
  }
  return { key: 'home', label: 'Home', icon: <UserOutlined />, url: '' };
};

export const SideBarComponent: React.FC<{}> = () => {
  const isCollapsed: boolean = collapsed.value;
  const navigate = useNavigate();

  const onClickMenu = ({ key }: { key: string }) => {
    const menu = findMenuItemByKey(menus, key);
    // console.log([ ...menus, ...menus.flatMap(item => item.children || []) ]);
    url.value = menu.url;
    console.log(menu.url);
    navigate(`/${menu.url}`);
  };
  return (
    <Sider trigger={null} collapsible collapsed={isCollapsed} width={200}>
      <div className="demo-logo-vertical" />
      <Menu
        defaultSelectedKeys={[url.value]}
        theme="dark"
        mode="inline"
        items={menus}
        onClick={onClickMenu}
      />
    </Sider>
  );
};
