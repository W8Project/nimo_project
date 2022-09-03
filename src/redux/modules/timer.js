import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getTimer = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://sample");
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  timer: [],
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  extraReducers: {
    [__getTimer.fulfilled]: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export default timerSlice.reducer;
