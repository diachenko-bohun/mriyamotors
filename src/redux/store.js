import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import carsReducer from '../redux/carsSlice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	// whitelist: ['access'],
	blacklist: ['cars'],
};

const rootReducer = combineReducers({
	cars: carsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
