import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as userAPI from 'api/userAPI';
import { RootState } from 'store';

// import JSONData from './data.json';

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string
};

interface IUserState {
  entities: IUser[],
  options: any,
  loading: 'idle' | 'pending',
  error: any
};

const initialState: IUserState = {
  entities: [],
  options: {},  
  loading: 'idle',
  error: null,
};

// Thunk
export const fetchAllUsers = createAsyncThunk(
  'users/fetchAllUsers',
   () => userAPI.handleFetchAllUsers()
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    reloadUsers: (state, action) => {
      state.entities = action.payload;
    },
  },
  extraReducers: {
    [fetchAllUsers.pending.type]: (state, action) => {
      state.loading = 'pending';
    },
    [fetchAllUsers.fulfilled.type]: (state, action) => {
      state.entities = action.payload;
      state.loading = 'idle';
    },
    [fetchAllUsers.rejected.type]: (state, action) => {
      state.entities = [];
      state.loading = 'idle';
    },
  }
});

export const { reloadUsers } = usersSlice.actions;

// Selectors
export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer;
