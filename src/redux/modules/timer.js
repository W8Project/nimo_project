import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getCheckInTimer = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://13.125.120.152/api/v1/checkIns",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQG5hdmVyLmNvbSIsImlzcyI6ImhhbmdoYWU1X3NlYXR1ZHkiLCJleHAiOjE2NjI0NjM0NjB9.sTHIYin4xlmNT_tcrrX6bYDcDzrFXysB5qJ9TBugomc",
          },
        }
      );
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getCheckOutTimer = createAsyncThunk(
  "timer/postTimer",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://13.125.120.152/api/v1/checkOuts",
        payload,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQG5hdmVyLmNvbSIsImlzcyI6ImhhbmdoYWU1X3NlYXR1ZHkiLCJleHAiOjE2NjI0NjM0NjB9.sTHIYin4xlmNT_tcrrX6bYDcDzrFXysB5qJ9TBugomc",
          },
        }
      );
      console.log(response.data);
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
    [__getCheckInTimer.fulfilled]: (state, action) => {
      state.timer = action.payload;
    },
    [__getCheckOutTimer.fulfilled]: (state, action) => {
      state.timer = action.payload;
    },
  },
});

export default timerSlice.reducer;
