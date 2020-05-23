import { createStore, combineReducers } from "redux";

const appstate = {};

const appReducer = (state = appstate, action) => {
  return state;
};

const rootReducers = combineReducers({
  app: appReducer
});

const store = createStore(rootReducers);

export default store;
