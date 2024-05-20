import { TRootState } from '@models/redux.store';
import axios from 'axios';
import { Middleware } from 'redux';
import { logOutAction } from '@store/auth/auth-slice';
import { AuthApiEndPoint } from '@utils/constants/auth-constant';
import { toast } from 'react-toastify';
const axiosInstance = axios.create({
	baseURL: import.meta.env.test_BACKEND_URL
});


const apiMiddleware: Middleware<object, TRootState> = storeApi => next => async action => {

	const { dispatch, getState } = storeApi;

	//INFO: Request
	axiosInstance.interceptors.request.use(
		config => {
			let authToken = getState().auth.token;
			axios.defaults.withCredentials=true
			if (authToken){
				config.headers.Authorization =`Bearer ${authToken}`;
			}
			return config;
		},
		error => Promise.reject(error)
	);

	//INFO: Response
	axiosInstance.interceptors.response.use(
		response => response,
		async error => {
			const originalRequest = error.config;
			if (
				error.response &&
				
				error.response.config.url !== `${import.meta.env.test_BACKEND_URL}${AuthApiEndPoint.AUTH_SIGNIN}`
			) {
				// localStorage.clear()
				
				try {

					return axiosInstance(originalRequest);
				} catch (error) {
					dispatch(logOutAction());
					return Promise.reject(error);
				}
			}if(error.response?.data?.msg){
				toast.error(error.response?.data?.msg);
			}
			else{
				toast.error(error.response?.data?.message);
			}
			
			return Promise.reject(error);
		}
		
	);
	// call the next action
	next(action);
};

export default apiMiddleware;
export { axiosInstance };
