import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
// import createSagaMiddleware from "redux-saga";
// import rootSagas from "./sagas/rootSagas";
import thunk from "redux-thunk";
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
