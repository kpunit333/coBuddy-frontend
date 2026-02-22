import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLoggedIn = localStorage.getItem('user');
  return isLoggedIn==="true" ? <Outlet/> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;