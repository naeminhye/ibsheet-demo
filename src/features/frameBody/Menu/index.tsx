import React from 'react';
import { Menu } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
import useMainTabs from 'hooks/useMainTabs';

const { SubMenu } = Menu;

const subMenu = [
  { key: 'User', title: '사용자관리', path: 'common/User' },
  { key: 'Org', title: '조직관리', path: 'common/Org' },
  { key: 'SampleServie', title: '서비스관리', path: 'sample/SampleService' },
  { key: 'ibsheet', title: 'Demo IBSheet', path: 'sample/IBSheet' },
];

function LeftMenu() {
  const { activeKey, onAddTab } = useMainTabs();

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={['sub1']}
      defaultSelectedKeys={['user']}
      selectedKeys={[activeKey]}
      style={{ width: '100%', borderRight: 0 }}
    >
      <SubMenu key="sub1" title="공통관리">
        {subMenu.map(({ key, title, path }) => (
          <Menu.Item key={key} onClick={() => onAddTab(key, title, path)}>
            {title}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
