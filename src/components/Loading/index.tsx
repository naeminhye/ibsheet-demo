import React from 'react';
import { Spin } from 'antd';
import { SettingTwoTone } from '@ant-design/icons';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Loading() {
  const loadingIcon = (
    <SettingTwoTone twoToneColor="#CCCCCC" style={{ fontSize: '4rem' }} spin />
  );

  return (
    <StyledDiv>
      <Spin indicator={loadingIcon} tip="Loading . . ." />
    </StyledDiv>
  );
}

export default Loading;
