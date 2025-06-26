import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // Replace with real authentication check
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
