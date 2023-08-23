import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authorization-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  siLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload.message;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload.message;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload.message;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});
export const authReducer = authSlice.reducer;
