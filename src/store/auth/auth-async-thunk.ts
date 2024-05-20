

import {  TSignInPayloadData, TSignUpPayloadData, } from '@models/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authLogoutApi, authSignInApi, authSignUpApi} from '@services/auth-service';
import { AuthActionTypes } from '@utils/constants/auth-constant';
import { toast } from 'react-toastify';

//INFO: user login thunk
const signInAsyncThunk = createAsyncThunk(
	AuthActionTypes.AUTH_SIGNIN,
	async (payload: TSignInPayloadData,) => {
		const response = await authSignInApi(payload);
		return response?.data;
	}
);
const signUpAsyncThunk = createAsyncThunk(
	AuthActionTypes.AUTH_SIGNUP,
	async (payload: TSignUpPayloadData,) => {
		
		const response = await authSignUpApi(payload);;
		return response?.data;
	}
);


const logoutAsyncThunk = createAsyncThunk(
	AuthActionTypes.AUTH_LOGOUT,
	async() => {
			const response = await authLogoutApi();
			console.log(response,"response")
			if(response?.data?.success){
				toast.success( 'Successfully logout');
			} else{
				toast.error( 'Logout Failed!!!')
			}
			return response;
	}
)



export {
signUpAsyncThunk, logoutAsyncThunk, signInAsyncThunk
};

