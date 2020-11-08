import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { message } from 'antd';
import {
  setActiveKey,
  addPane,
  removePane,
  resetPanes,
} from 'features/frameBody/MainTabs/slice';
import { getNewPane } from 'features/frameBody/MainTabs';
import {
  MAX_TAB_LENGTH,
  TAB_LIMIT_MESSAGE,
} from 'features/frameBody/MainTabs/constants';

export default function useMainTabs() {
  const panes = useSelector((state: RootState) => state.mainTabs.panes);
  const activeKey = useSelector((state: RootState) => state.mainTabs.activeKey);
  const dispatch = useDispatch();

  const onChangeTabKey = useCallback(
    (key: string) => dispatch(setActiveKey(key)),
    [dispatch],
  );

  const onAddTab = useCallback(
    (key: string, title: string, path: string) => {
      if (panes.length >= MAX_TAB_LENGTH) {
        message.warning(TAB_LIMIT_MESSAGE);
        return;
      }
      if (panes.some(element => element.key === key)) {
        activeKey !== key && dispatch(setActiveKey(key));
        return;
      }
      const newPane = getNewPane(key, title, path);
      dispatch(addPane(newPane));
    },
    [panes, activeKey, dispatch],
  );

  const onClosePane = useCallback(
    (targetKey: string) => {
      if (targetKey === panes[0].key) return;
      dispatch(removePane(targetKey));
    },
    [panes, dispatch],
  );

  const onCloseAllPanes = useCallback(() => dispatch(resetPanes()), [dispatch]);

  return {
    panes,
    activeKey,
    onChangeTabKey,
    onAddTab,
    onClosePane,
    onCloseAllPanes,
  };
}
