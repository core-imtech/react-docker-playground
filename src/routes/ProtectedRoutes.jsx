import { Navigate } from "react-router-dom";
import { getAuth } from "../utils/fakeAuth";

export default function ProtectedRoutes({ allowRoles, children }) {
  const { isAuthenticated, role } = getAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (isAuthenticated && allowRoles.includes(role) === false) {
    return <Navigate to="/403" replace />
  }

  return children;
}