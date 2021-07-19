import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSagas from "./sagas/rootSagas";
const sagaMiddleWare = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSagas);
export default store;
