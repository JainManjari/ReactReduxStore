import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./containers/App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("store ", store.getState().reducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
