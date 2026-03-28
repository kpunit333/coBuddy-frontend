import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StorageService from '../services/StorageService';
import type { AppDispatch, RootState } from '../store';
import { loginSuccess, logout, setAuthState } from '../store/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, user, tokens } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const tokens = StorageService.get('tokens');
    const user = StorageService.get('user');
    if (tokens && user) {
      dispatch(setAuthState({ user, tokens }));
    }else{
      dispatch(logout());
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

