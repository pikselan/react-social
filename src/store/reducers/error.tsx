import { GET_ERRORS } from "../types";

const initialState = {};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
