import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
      localStorage.setItem('tokens', JSON.stringify(action.payload.tokens));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.tokens = null;
      localStorage.removeItem('tokens');
      localStorage.removeItem('user');
    },
    setToken: (state, action: PayloadAction<object>) => {
      state.tokens = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { loginSuccess, logout, setToken } = authSlice.actions;
export default authSlice.reducer;

