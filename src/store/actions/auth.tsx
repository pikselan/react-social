import axios from "../../utils/axios";
import setAuthToken from "../../utils/auth";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../types";

export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

export const registerUser = (userData: any, history: any) => (
  dispatch: any
) => {
  axios
    .post(`/users/register`, userData)
    .then((res) => history.push("/login"))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
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
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const logoutUser = () => (dispatch: any) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
