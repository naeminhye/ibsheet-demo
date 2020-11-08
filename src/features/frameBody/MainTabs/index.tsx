import React from 'react';
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import useMainTabs from 'hooks/useMainTabs';
import { StyledTabs, StyledTabPane } from './styles';
import ContentCompoent from 'components/ContentComponent';
import {
  INITIAL_TABKEY,
  INITIAL_TAB_PATH,
  PREFIX_CONTENT_PATH,
  CLOSE_ALL_TAB_MESSAGE,
} from './constants';

export const initialPanes = [
  {
    key: INITIAL_TABKEY,
    title: INITIAL_TABKEY,
    content: (
      <ContentCompoent
        componentPath={`${PREFIX_CONTENT_PATH}${INITIAL_TAB_PATH}`}
      />
    ),
  },
];

export const getNewPane = (key: string, title: string, path: string) => {
  return {
    key,
    title,
    content: (
      <ContentCompoent componentPath={`${PREFIX_CONTENT_PATH}${path}`} />
    ),
  };
};

function MainTabs() {
  const {
    panes,
    activeKey,
    onChangeTabKey,
    onClosePane,
    onCloseAllPanes,
  } = useMainTabs();

  const operations = (
    <Button
      icon={<CloseOutlined />}
      onClick={onCloseAllPanes}
      style={{ marginBottom: '4px' }}
      disabled={panes.length < 2 ? true : false}
    >
      {CLOSE_ALL_TAB_MESSAGE}
    </Button>
  );

  return (
    <StyledTabs
      tabBarExtraContent={operations}
      hideAdd
      onChange={activeKey => onChangeTabKey(activeKey)}
      activeKey={activeKey}
      type="editable-card"
      onEdit={targetKey => onClosePane(String(targetKey))}
    >
      {panes.map(pane => (
        <StyledTabPane
          tab={pane.title}
          key={pane.key}
          closeIcon={pane.key === panes[0].key && true}
        >
          {pane.content}
        </StyledTabPane>
      ))}
    </StyledTabs>
  );
}

export default MainTabs;
