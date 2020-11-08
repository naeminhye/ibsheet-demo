import { Tabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

export const StyledTabs = styled(Tabs)`
  height: 100%;
  .ant-tabs-content {
    height: 100%;
  }
`;

export const StyledTabPane = styled(TabPane)`
  display: flex;
  flex-flow: column;
  height: 100%;
  padding: 8px;
`;
