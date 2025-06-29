// src/pages/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("bbs_cms_token");
  const location = useLocation();

  if (!token) {
    // send ’em back to login, but remember where they came from
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
