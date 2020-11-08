import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LeftMenu from '../Menu';
import { PRIMARY_COLOR } from 'constants/common';
import { StyledMenuWrpper } from './styles';

const { Sider } = Layout;

const boxShadow = '2px 2px 2px #d8d8d8';

function LeftSider() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      theme="light"
      collapsible
      collapsedWidth={0}
      collapsed={collapsed}
      onCollapse={collapsed => setCollapsed(collapsed)}
      trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      zeroWidthTriggerStyle={{
        boxShadow: `${collapsed ? '' : boxShadow}`,
        background: `${collapsed ? PRIMARY_COLOR : '#FFFFFF'}`,
      }}
      style={{
        boxShadow,
        borderRight: `${collapsed ? `6px solid ${PRIMARY_COLOR}` : 0}`,
      }}
    >
      <StyledMenuWrpper>
        <LeftMenu />
      </StyledMenuWrpper>
    </Sider>
  );
}

export default LeftSider;
