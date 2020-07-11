import { SET_CURRENT_USER, USER_LOADING } from "../types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  userLoading: false,
};

export default function (
  state = initialState,
  action: { type: any; payload: Object }
) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        userLoading: true,
      };
    default:
      return state;
  }
}
