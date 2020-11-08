import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledDiv = styled.div`
  float: right;
  display: flex;
  height: 100%;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  .UserInfo {
    display: flex;
    align-items: center;
  }
  .Logout {
    display: inline-flex;
    padding: 18px;
    cursor: pointer;
    &:hover {
      background: #133b63;
    }
  }
`;

function HeaderRightSet() {
  return (
    <StyledDiv>
      <span className="UserInfo">
        <Avatar icon={<UserOutlined />} />
        &nbsp;&nbsp;이준영&nbsp;님&nbsp;
      </span>
      <span className="Logout">
        <LogoutOutlined style={{ fontSize: '28px' }} />
      </span>
    </StyledDiv>
  );
}

export default HeaderRightSet;
