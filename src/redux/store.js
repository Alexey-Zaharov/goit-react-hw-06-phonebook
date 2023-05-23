import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { listReducer } from './listSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: listReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  contacts: listReducer,
  filter: filterReducer,
  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
