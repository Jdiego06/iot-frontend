import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";

const RouteGuard = ({ component: Component, ...rest }) => {
  function hasJWT() {
    return true;

    //check user has JWT token
    // localStorage.getItem("token") ? (flag = true) : (flag = false);
    // return flag;
  }

  return hasJWT ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteGuard;
