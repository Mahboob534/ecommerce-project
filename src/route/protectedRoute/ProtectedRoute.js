import React from "react";
import { Navigate } from "react-router-dom";

import { PATHS } from "../../config/routes.config";
import { ACCESS_TOKEN } from "../../config/variable.config";

function ProtectedRoute(props) {
  const Page = props.page;
  
  const isLogged = JSON.parse(localStorage.getItem(ACCESS_TOKEN))  ;
  if (isLogged) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  } else {
    return <Page />;
  }
}

export default ProtectedRoute;
