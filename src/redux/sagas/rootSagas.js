import { all } from "redux-saga/effects";
import userSaga from "./user.sagas";

export default function* rootSagas() {
  yield all([userSaga()]);
}
