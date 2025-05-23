import { useAuth } from "@/context/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser: user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (user) return children;

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
