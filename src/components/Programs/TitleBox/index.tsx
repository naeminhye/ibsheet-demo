import React from 'react';
import { Typography } from 'antd';
import { TagTwoTone, RightCircleFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { PRIMARY_COLOR } from 'constants/common';

const { Title } = Typography;

type TitleBox = {
  type: string;
  title: string;
  children?: JSX.Element;
};

const StyledHeaderDiv = styled.div`
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

function TitleBox({ type, title, children }: TitleBox) {
  const isMainTitle = type === 'main';

  const titleLevel = isMainTitle ? 4 : 5;
  const icon = isMainTitle ? (
    <TagTwoTone twoToneColor={PRIMARY_COLOR} style={{ fontSize: '22px' }} />
  ) : (
    <RightCircleFilled style={{ color: '#CCCCCC' }} />
  );

  return (
    <StyledHeaderDiv>
      <Title
        level={titleLevel}
        style={{ float: 'left', margin: `${isMainTitle ? '0' : '2px'} 0` }}
      >
        {icon}&nbsp;{title}
      </Title>
      {children}
    </StyledHeaderDiv>
  );
}

export default React.memo(TitleBox);
