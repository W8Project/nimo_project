import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";
import timer from "../modules/timer";

const store = configureStore({
  reducer: todos,
  reducer: timer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
