import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  }

  return hasJWT ? <Navigate to="/login" /> : <Outlet />;
};

export default RouteGuard;
