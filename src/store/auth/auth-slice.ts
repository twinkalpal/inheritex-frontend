import { createSlice } from '@reduxjs/toolkit';
import {
	
	logoutAsyncThunk,
	signInAsyncThunk,
	signUpAsyncThunk,
	
} from '@store/auth/auth-async-thunk';
import { TAuthState } from '@models/auth';
import { REHYDRATE } from 'redux-persist';
import { TRehydratePayload } from '@models/redux.store';
import { SliceNames } from '@utils/constants/redux-constant';


const initialState: TAuthState = {
	token: '',
	loader: { loading: false, postLoading: false },
	isRegistered:false,
	data:{
		firstName: '',
		lastName: '',
		mobile: '',
		email: '',
		password: ''
	}
};

const authSlice = createSlice({
	name: SliceNames.AUTH,
	initialState,
	reducers: {
		loginAction: (state, action) => {
			console.log(action)
			state.loader.loading = false;
			state.token = action.payload.token;
			state.data=action.payload.data;
			state.isRegistered=false;
		},
		logOutAction: state => {
			state.token = '';
		}
	},
	extraReducers: builder => {
		builder
			//INFO: rehydrate case
			.addCase(
				REHYDRATE,
				(_, action: { type: typeof REHYDRATE; payload: TRehydratePayload }) => {
					return { ...action?.payload?.auth, loader: initialState.loader };
				}
			)

			//INFO: sign in
			.addCase(signInAsyncThunk.pending, state => {
				state.loader.postLoading = true;
			})
			.addCase(signInAsyncThunk.fulfilled, (state, action) => {
				console.log(action,"====>token")
				const {access_token}:any=action.payload
				state.token =access_token
				state.loader.postLoading = false;
				state.isRegistered=false;
				state.data=action.payload.data;
			
				
			})
			.addCase(signInAsyncThunk.rejected, state => {
				state.loader = { ...state.loader, postLoading: false };
			})
			.addCase(signUpAsyncThunk.pending, state => {
				state.loader.postLoading = true;
			})
			.addCase(signUpAsyncThunk.fulfilled, (state, action) => {
				state.loader.postLoading = false;
				state.isRegistered=true;
			})
			.addCase(signUpAsyncThunk.rejected, state => {
				state.loader.postLoading = false;
			})
		

			//INFO: Logout
			.addCase(logoutAsyncThunk.pending, (state) => {
				state.loader.postLoading = true;
			})
			.addCase(logoutAsyncThunk.fulfilled, state => {
				state.token = '';
				state.loader.postLoading = false;
			})
			.addCase(logoutAsyncThunk.rejected, (state) => {
				state.token = '';
				state.loader.postLoading = false;
			})
	}
});

export default authSlice.reducer;
export const { loginAction, logOutAction } = authSlice.actions;
