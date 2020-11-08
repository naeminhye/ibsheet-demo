import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Logo from 'components/Layouts/Logo';
import HeaderRightSet from 'components/Layouts/HeaderRightSet';
import LeftSider from 'features/frameBody/LeftSider';
import MainTabs from 'features/frameBody/MainTabs';

// Disable browser's back button
window.history.pushState(null, document.title, window.location.pathname);
window.addEventListener('popstate', e => {
  window.history.pushState(null, document.title, window.location.pathname);
});
// Confirm before closing the window
window.addEventListener('beforeunload', e => {
  e.preventDefault();
  e.returnValue = '';
});

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
  background: #0f2f4f;
  padding: 0 16px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

const StyledContent = styled(Content)`
  padding: 4px;
  height: 100%;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

function Main() {
  return (
    <Layout style={{ display: 'flex', height: '100%' }}>
      <StyledHeader>
        <Logo />
        <HeaderRightSet />
      </StyledHeader>
      <Layout style={{ display: 'flex', flex: 1 }}>
        <LeftSider />
        <Layout style={{ padding: '8px 16px' }}>
          <StyledContent>
            <MainTabs />
          </StyledContent>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Main;
