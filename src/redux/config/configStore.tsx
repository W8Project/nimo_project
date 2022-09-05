import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";
import timer from "../modules/timer";

const store = configureStore({
  reducer: todos,
  timer,
});

export default store;
