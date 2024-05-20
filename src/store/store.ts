import { persistReducer, persistStore } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage';
import apiMiddleware, { axiosInstance } from '@middleware/middleware';
import { TRootState } from '@models/redux.store';
import { Reducer, configureStore } from '@reduxjs/toolkit';
import {
	REDUX_PERSISTENT_STORE_ENCRYPT_KEY,
	REDUX_PERSISTENT_STORE_KEY,
	SliceNames
} from '@utils/constants/redux-constant';
import rootReducer from '@store/root-reducer';

const encryptor = encryptTransform({ secretKey: REDUX_PERSISTENT_STORE_ENCRYPT_KEY });

const persistedReducer = persistReducer(
	{
		transforms: [encryptor],
		key: REDUX_PERSISTENT_STORE_KEY,
		storage,
		version: 1,
		whitelist: [SliceNames.AUTH]
	},
	rootReducer as unknown as Reducer<TRootState>
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false,
			thunk: { extraArgument: axiosInstance }
		}).concat(apiMiddleware),
	// devTools: "development"
});

export const persistor = persistStore(store);
export default store;
