import { configureStore } from "@reduxjs/toolkit";
import sample from '../modules/sample';

const store = configureStore({
  reducer: { sample },
});

export default store;