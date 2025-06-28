import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  const bankToken = localStorage.getItem("bankToken");
  if (!token && !bankToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default ProtectedRoutes;
