import { Navigate } from "react-router-dom";

// Simulated authentication hook
function useAuth() {
  const isAuthenticated = false; // you can change to true for testing
  return { isAuthenticated };
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;

