// components/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // o el nombre que uses en tu contexto

  if (!isAuthenticated) {
    return <Navigate to="/entrar" replace />;
  }

  return children;
}