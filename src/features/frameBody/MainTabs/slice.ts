import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialPanes } from './index';

type Pane = {
  key: string;
  title: string;
  content: JSX.Element;
};

const initialState = {
  panes: initialPanes,
  activeKey: initialPanes[0].key,
};

export const mainTabsSlice = createSlice({
  name: 'mainTabs',
  initialState,
  reducers: {
    setActiveKey: (state, action: PayloadAction<string>) => {
      state.activeKey = action.payload;
    },
    addPane: (state, action: PayloadAction<Pane>) => {
      state.panes = [...state.panes, action.payload];
      state.activeKey = action.payload.key;
    },
    removePane: (state, action: PayloadAction<string>) => {
      state.panes = state.panes.filter(pane => pane.key !== action.payload);
      state.activeKey === action.payload &&
        (state.activeKey = initialState.activeKey);
    },
    resetPanes: () => initialState,
  },
});

export const {
  setActiveKey,
  addPane,
  removePane,
  resetPanes,
} = mainTabsSlice.actions;

export default mainTabsSlice.reducer;
