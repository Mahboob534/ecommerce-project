import React from "react";
import { Navigate } from "react-router-dom";

import { PATHS } from "../../config/routes.config";
import { IS_LOGGED } from "../../config/variable.config";

function ProtectedRoute(props) {
  const Page = props.page;

  const isLogged = localStorage.getItem(IS_LOGGED) === "true";
  if (isLogged) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  } else {
    return <Page />;
  }
}

export default ProtectedRoute;
