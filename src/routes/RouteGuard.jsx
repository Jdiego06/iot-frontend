import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuthenticatedUser } from "../services/AuthService";

const RouteGuard = () => {
  return getAuthenticatedUser() ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteGuard;
