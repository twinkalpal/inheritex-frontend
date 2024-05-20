import { TAuthSiginnApiResponse,  TLogoutResponse,  TSignInPayloadData, TSignUpPayloadData  } from "@models/auth";
import { TApiResponse } from "@models/axios";
import { POST } from "@shared/services/web-service";
import { AuthApiEndPoint } from "@utils/constants/auth-constant";

/**
 * login api call
 * @param payload
 * @returns
 */
const authSignInApi = (payload: TSignInPayloadData): TApiResponse<TAuthSiginnApiResponse> => {
  return POST({
    URL: AuthApiEndPoint.AUTH_SIGNIN,
    body: {
      email: payload.email,
      password: payload.password
    }
  }
  );
};
const authSignUpApi = (payload: TSignUpPayloadData): TApiResponse<TAuthSiginnApiResponse> => {
 console.log(payload) 
  return POST({
    URL: AuthApiEndPoint.AUTH_SIGNUP,
    body: {
      email: payload.email,
      password: payload.password,
      firstName:payload.firstName,
      lastName:payload.lastName,
      mobile:payload.mobile,
    }
  }
  );
};


const authLogoutApi = (): TApiResponse<TLogoutResponse> => {
  return POST({
    URL: AuthApiEndPoint.AUTH_LOGOUT,
    body: {}
  })
}


export {
  authSignUpApi, authLogoutApi, authSignInApi, 
};
