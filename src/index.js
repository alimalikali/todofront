import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "./store/api/apiSlice";
import { store } from './store';
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
