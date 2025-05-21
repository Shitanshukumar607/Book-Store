import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser: user } = useAuth();

  if (user) return children;

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
