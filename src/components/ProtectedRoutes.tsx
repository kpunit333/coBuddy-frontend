import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('tokens') ?? "null")?.accessToken ?? null;
  return isLoggedIn ? <Outlet/> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;