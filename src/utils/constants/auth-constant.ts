const BASE_AUTH_ENDPOINT = 'user';
const AuthApiEndPoint = {
	AUTH_SIGNIN: `${BASE_AUTH_ENDPOINT}/login`,
	AUTH_SIGNUP: `${BASE_AUTH_ENDPOINT}/signup`,
	AUTH_LOGOUT: `${BASE_AUTH_ENDPOINT}/logout/`,
};

const AuthActionTypes = {
	AUTH_SIGNIN: `login`,
	AUTH_SIGNUP: `register`,
	AUTH_LOGOUT: `${BASE_AUTH_ENDPOINT}/logout`,
};

export {
	AuthActionTypes,
	AuthApiEndPoint,
	
};
