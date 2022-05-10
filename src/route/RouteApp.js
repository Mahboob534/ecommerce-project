import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PATHS } from "../config/routes.config";
import * as Page from "../pages";

import PublicRoute from "../route/publicRoute/publicRoute";
import PrivateRoteute from "../route/privateRouter/PrivateRoute";
import ProtectedRoute from "../route/protectedRoute/ProtectedRoute";

export default function RouteApp() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route
          path={PATHS.HOME}
          element={<PublicRoute hasLogin={1} page={Page.Home} users={"User"} />}
        />
        <Route
          path={PATHS.DASHBOARD}
          element={
            <PublicRoute hasLogin={1} page={Page.Dashboard} users={"User"} />
          }
        />
        <Route
          path={PATHS.CATEGORIES}
          element={
            <PublicRoute hasLogin={1} page={PagCartCART} users={"User"} />
          }
        />
        <Route
          path={PATHS.PAYMENT}
          element={
            <PublicRoute hasLogin={1} page={Page.Payment} users={"User"} />
          }
        />
        <Route
          path={PATHS.RESULT}
          element={
            <PublicRoute hasLogin={1} page={Page.Result} users={"User"} />
          }
        />
        <Route
          path={PATHS.DETAIL}
          element={
            <PublicRoute hasLogin={1} page={Page.Detail} users={"User"} />
          }
        />
        <Route
          path={PATHS.BUY}
          element={<PublicRoute hasLogin={1} page={Page.Buy} users={"User"} />}
        />
        <Route
          path={PATHS.LOGIN}
          element={<ProtectedRoute page={Page.Login} />}
        />

        <Route
          path={PATHS.ORDERS}
          element={
            <PrivateRoteute
              haslogin={0}
              page={<Page.Orders />}
              users={"User"}
            />
          }
        />
        <Route
          path={PATHS.PRODUCT}
          element={
            <PrivateRoteute
              haslogin={0}
              page={<Page.ProductInfo />}
              users={"User"}
            />
          }
        />
        <Route
          path={PATHS.STACK}
          element={
            <PrivateRoteute haslogin={0} page={<Page.Stack />} users={"User"} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
