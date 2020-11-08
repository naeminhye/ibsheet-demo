import { Layout } from 'antd';
import styled from 'styled-components';
import { PRIMARY_COLOR } from 'constants/common';

const { Sider } = Layout;

export const StyledTrigger = styled.div<{ collapsed: boolean }>`
  position: absolute;
  left: ${props => (props.collapsed ? 62 : 200)}px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;
  top: 144px;
  background: #ffffff;
  padding: 4px 8px;
  z-index: 1;
  box-shadow: 2px 2px 2px #d8d8d8;
  &:hover {
    color: ${PRIMARY_COLOR};
  }
`;

export const StyledSider = styled(Sider)`
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
  box-shadow: 2px 2px 2px #d8d8d8;
`;

export const StyledMenuWrpper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;
