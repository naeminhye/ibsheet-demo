import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import JSONData from './data.json';

interface IUserState {
  data: IUser[],
  options: any,
  loading: boolean,
};

interface IUser {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  gender: string,
  birthday: string,
};

const initialState: IUserState = {
  data: JSONData,
  options: {},
  loading: false
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchAllUsers: (state) => {
      return {...state}
    },
    addRows: (state, action: PayloadAction<IUser[]>) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});
// Later, dispatch the thunk as needed in the app
// dispatch(fetchAllUsers())

export const {
  fetchAllUsers,
  addRows
} = usersSlice.actions;

export default usersSlice.reducer;
