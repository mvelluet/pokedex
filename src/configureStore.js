import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import { isDev } from "./utils";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favoris']
}

export default (initialState) => {
  const middlewares = [thunk];

  if (isDev) {
    const logger = createLogger({ duration: true, timestamp: false, collapsed: true, diff: true });
    middlewares.push(logger);
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)


  const store = configureStore({
    preloadedState: initialState,
    reducer: persistedReducer,
    middleware: middlewares
  })

  return store;
};
