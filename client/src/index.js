import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./store/reducers";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: reducers,
});

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
