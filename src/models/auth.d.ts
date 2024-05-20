import { ReactNode } from 'react';
import { TPermissionData } from '@models/profile';

type TAuthState = {
	loader: {
		loading: boolean;
		postLoading: boolean;
	};
	token: string;
	isRegistered:boolean,
	data:TProfileData
};

type TSignInPayloadData = {
	email: string;
	password: string;
};
type TProfileData = {
	firstName: string;
	lastName: string;
	mobile: string;
	email: string;
	password: string;
};
type TSignUpPayloadData = {
	firstName: string;
	lastName: string;
	mobile: string;
	email: string;
	password: string;
};


type TLogoutResponse = {
	message: string;
};


type TAuthenticatedProps = {
	children: ReactNode;
};

type TAuthSiginnApiResponse = {
	data: TProfileData;
	access_token: string;
	refresh_token: string;
	expiresIn: number;
	message: string;
};



export type {
	TSignInPayloadData,
	TAuthenticatedProps,
	TAuthState,
	TAuthSiginnApiResponse,
	TLogoutResponse,
	TSignUpPayloadData,TProfileData
};