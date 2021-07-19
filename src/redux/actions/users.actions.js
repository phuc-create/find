import * as types from "../types";

export const getUser = (user) => {
  return {
    type: types.GET_USER_REQUESTED,
    payload: user,
  };
};
