import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { loginSuccess, logout, setToken, setUser } from '../store/authSlice';
import { useEffect } from 'react';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user, tokens } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem('tokens') || 'null');
    if (tokens && !isLoggedIn) {
      dispatch(setToken(tokens));
    }
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      dispatch(setUser(user));
    }
  }, [dispatch, isLoggedIn]);

  const login = (data: {user: object, tokens: object}) => {
    dispatch(loginSuccess({ user: data?.user, tokens: data?.tokens }));
  };

  const logOut = () => {
    dispatch(logout());
  };

  return { isLoggedIn, user, tokens, login, logOut };
};

