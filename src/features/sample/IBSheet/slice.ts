import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as userAPI from 'api/userAPI';
import { RootState } from 'store';

// import JSONData from './data.json';

interface IUser {
  // first: string
  // last: string
  // email: string
  // address: string
  // created: string
  // balance: string
  id: number,
  name: string,
  username: string,
  // first_name: string,
  // last_name: string,
  email: string,
  phone: string
  // gender: string,
  // birthday: string,
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

export const addNewUser = createAsyncThunk(
  'users/addNewUser',
  async (userData, thunkAPI) => {
    const response = await userAPI.handleAddUser({
      id: 100,
      name: 'gfghdhd',
      username: 'dfgdfg',
      email: 'dfgdfg',
      phone: 'gdfgdfg',
    });
    console.log("userData", userData)
    console.log("thunkAPI", thunkAPI)
    // thunkAPI.dispatch(fetchAllUsers());
    return response.data
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
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
    [addNewUser.pending.type]: (state, action) => {
      state.loading = 'pending';
    },
    [addNewUser.fulfilled.type]: (state, action) => {
      state.entities.push(action.payload);
      state.loading = 'idle';
    },
    [addNewUser.rejected.type]: (state, action) => {
      state.entities = [];
      state.loading = 'idle';
    },
  }
});

// Selectors
export const selectUsers = (state: RootState) => state.users

export default usersSlice.reducer;
