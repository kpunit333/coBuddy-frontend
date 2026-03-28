import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import StorageService from '../services/StorageService';

interface UserState {
  isLoggedIn: boolean;
  user: object | null;
  tokens: object | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
  tokens: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ user: object; tokens: object }>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.tokens = action.payload.tokens;
      StorageService.set('tokens', action.payload.tokens);
      StorageService.set('user', action.payload.user);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.tokens = null;
      StorageService.clear('tokens');
      StorageService.clear('user');
    },
    setToken: (state, action: PayloadAction<object>) => {
      state.tokens = action.payload;
      state.isLoggedIn = true;
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, logout, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;

