import store from "@/infrastructure/store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.less";
import Popup from "./Popup";

ReactDOM.render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  document.getElementById("root")
);
