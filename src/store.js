import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";

const logMiddleware =
  ({ getState }) =>
  (next) =>
  (action) => {
    console.log(action.type, getState());
    return next(action);
  };

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }

  return next(action);
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware).concat(logMiddleware),
});

export default store;
