import * as types from "../types";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export default function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USER_REQUESTED:
      return { ...state, isLoading: true };
    case types.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };
    case types.GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
