import StorageService from '../services/StorageService';
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokens = StorageService.get('tokens');
  const isLoggedIn = tokens?.accessToken ?? null;
  return isLoggedIn ? <Outlet/> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;