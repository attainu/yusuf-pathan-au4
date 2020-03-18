import React from "react";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Form from "./Form";
import List from "./List";

export default function App() {
  return (
    <Provider store={store}>
      <Form />
      <List />
    </Provider>
  );
}
