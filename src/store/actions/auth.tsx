import axios from "../../utils/axios";
import setAuthToken from "../../utils/auth";
import jwt_decode from "jwt-decode";

import * as types from "../types";

export interface setCurrentUser {
  type: types.SET_CURRENT_USER;
  payload: any;
}
export interface setUserLoading {
  type: types.USER_LOADING;
}
export interface registerUser {
  type: types.SET_CURRENT_USER;
  payload: any;
}
export interface loginUser {
  type: types.SET_CURRENT_USER;
  payload: any;
}
export interface logoutUser {
  type: types.SET_CURRENT_USER;
  payload: any;
}

export const setCurrentUser = (decoded: any): setCurrentUser => {
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = (): setUserLoading => {
  return {
    type: types.USER_LOADING,
  };
};

export const registerUser = (userData: any, history: any) => (
  dispatch: any
) => {
  axios
    .post(`/users/register`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({ type: types.GET_ERRORS, payload: err.response.data })
    );
};

export const loginUser = (userData: any) => (dispatch: any) => {
  axios
    .post(`/users/login`, userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({ type: types.GET_ERRORS, payload: err.response.data })
    );
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
