import { AxiosError, AxiosResponse } from 'axios';
type TPayload<T> = {
	data: {
		data: T,
		success: boolean,
		message: string;
	}
}

type TApiResponse<T> = Promise<
	AxiosResponse<{
		success: any;
		data: any;payload: TPayload<T>
}>
>;

type TApiFail = AxiosError<{
	message: string;
	status: number;
	errorMessage: string;
	errorStack: string;
}>;

export type { TPayload, TApiResponse, TApiFail };