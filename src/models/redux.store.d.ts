import { TAuthState } from '@models/auth';
import store from '@store/store';

type TRootState = {
	auth: TAuthState;
	
};

type TAppDispatch = typeof store.dispatch;

type TRehydratePayload = {
	auth: TAuthState;
};

export type { TAppDispatch, TRehydratePayload, TRootState };

