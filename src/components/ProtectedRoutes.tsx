import StorageService from '../services/StorageService';
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const tokens = StorageService.get('tokens');
  const user = StorageService.get('user') ?? null;
  const isLoggedIn = tokens?.accessToken ?? null;
  return (isLoggedIn && user)  ? <Outlet/> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;