import { Navigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
  // If not authenticated, redirect to home
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access
  return children;
}

export default ProtectedRoute;
