import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "./userService";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

const initialState = {
  user: user ? user : null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload) => {
    return userService.registerUser(payload);
  }
);

export const loginUser = createAsyncThunk("user/loginUser", async (payload) => {
  return userService.loginUser(payload);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "idle";
      state.error = null;
    },
    logoutUser: (state) => {
      localStorage.removeItem("user");
      state.status = "succeeded";
      state.user = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      //Regiser User
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //Login User
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export const { reset, logoutUser } = userSlice.actions;

export default userSlice.reducer;
