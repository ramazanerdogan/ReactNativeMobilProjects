import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Routes from "./src/routes/Routes";

import UserReducer from "./src/store/UserReducer";
const store = createStore(UserReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}