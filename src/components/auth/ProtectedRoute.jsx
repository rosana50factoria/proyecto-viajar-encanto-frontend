// components/auth/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // o el nombre que uses en tu contexto
  const location = useLocation();

  if (!isAuthenticated) {
    // return <Navigate to="/login" replace />;
     return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}