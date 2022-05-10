import React from "react";
import { Navigate } from "react-router-dom";

import { PATHS } from "../../config/routes.config";
import { IS_LOGGED } from "../../config/variable.config";
import LayoutAdmin from "../../layout/LayoutAdmin";
import LayoutUser from "../../layout/LayoutUser";

function PrivateRoute(props) {
  const Page = props.page;
  const hasLogin = props.hasLogin;
  const users = props.users;
  const isLogged = localStorage.getItem(IS_LOGGED) === true;
  if (!isLogged) {
    return <Navigate to={PATHS.LOGIN} replace />;
  } else {
    return hasLogin ? (
      users === "User" ? (
        <LayoutUser>
          <Page />
        </LayoutUser>
      ) : (
        <LayoutAdmin>
          <Page />
        </LayoutAdmin>
      )
    ) : (
      <Page />
    );
  }
}

export default PrivateRoute;
