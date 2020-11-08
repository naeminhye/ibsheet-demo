import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LeftMenu from '../Menu';
import { StyledTrigger, StyledSider } from './styles';

function LeftSider() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <StyledTrigger
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </StyledTrigger>
      <StyledSider
        theme="light"
        collapsible
        collapsed={collapsed}
        trigger={null}
        collapsedWidth={64}
      >
        <LeftMenu />
      </StyledSider>
    </>
  );
}

export default LeftSider;
