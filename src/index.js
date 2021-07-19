import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import Context from "./components/context/Context";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Context>
        <App />
      </Context>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
