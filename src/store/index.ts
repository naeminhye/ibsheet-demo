import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();
const logger = createLogger();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [saga, logger],
  });
  saga.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;

export default createStore;
