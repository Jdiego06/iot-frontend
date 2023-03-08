import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userIsAuthenticated } from "../services/AuthService";

const RouteGuard = () => {
  return userIsAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteGuard;
