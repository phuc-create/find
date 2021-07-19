import * as types from "../types";
import { put, takeEvery, call } from "redux-saga/effects";
const apiUrl = "https://jsonplaceholder.typicode.com/users/1/posts";
async function getApi() {
  return await fetch(apiUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function* fetchUsers(payload) {
  try {
    const users = yield call(getApi);
    console.log(users);
    yield put({ type: types.GET_USER_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: types.GET_USER_ERROR, payload: error.message });
  }
}
function* userSaga() {
  yield takeEvery(types.GET_USER_REQUESTED, fetchUsers);
}

export default userSaga;
