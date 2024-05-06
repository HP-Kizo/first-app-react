import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/context";
import { PersistGate } from "redux-persist/integration/react";
import persistor from "./store/context";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate loading={<App />} persistor={persistor}></PersistGate>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);