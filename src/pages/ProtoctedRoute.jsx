import { useEffect } from "react";
import { useAuth } from "../contexts/fakeAuthContext";
import { useNavigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [navigate, isAuthenticated]);
  return children;
};

export default ProtectedRoute;
