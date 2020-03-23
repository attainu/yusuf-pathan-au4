import { createStore, combineReducers } from "redux";
import todoReducer from "./reducer/todoReducer";

let rootReducer = combineReducers({
  todo: todoReducer
});

let store = createStore(rootReducer);

const stateMapper = state => state;

export { store, stateMapper };
