import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import cartReducer from './favorites/reducer';

import {  
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  };

const rootReducer = combineReducers({
cart: cartReducer,
});

const persistedReduser = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReduser,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
}, composeWithDevTools());

export const persistor = persistStore(store);