import { combineReducers } from '@reduxjs/toolkit';
import mainTabs from 'features/frameBody/MainTabs/slice';
import users from 'features/sample/IBSheet/slice'

const rootReducer = combineReducers({ mainTabs, users });

export default rootReducer;
