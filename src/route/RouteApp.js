import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../redux/store/Store";
import { PATHS } from "../config/routes.config";
import * as Page from "../pages";
import PublicRoute from "../route/publicRoute/publicRoute";
import PrivateRoute from "../route/privateRouter/PrivateRoute";
import ProtectedRoute from "../route/protectedRoute/ProtectedRoute";
import { Provider } from "react-redux";


export default function RouteApp() {
  return (
    <Provider store={store}>
     
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME}  element={<PublicRoute  page={Page.Home} />}/>
          
         
          <Route path= {'/Categories/:categoryId'} element={<PublicRoute  page={Page.Categories}/>}/>
          
    
          <Route
            path={'/Detail/:productId'} element={ <PublicRoute  page={Page.Detail} />}/>
     
     <Route
            path={PATHS.CART}
            element={
              <PublicRoute page={Page.Cart}  />
            }
          />
          <Route
            path={PATHS.PAYMENT}
            element={
              <PublicRoute page={Page.Payment}  />
            }
          />
          <Route
            path={'/Categories/:categoryId/:Subgroup'}
            element={
              <PublicRoute  page={Page.SubCategories}  />
            }
          />
         
          <Route
            path={PATHS.BUY}
            element={
              <PublicRoute  page={Page.Buy}  />
            }
          />
          <Route
            path={PATHS.LOGIN}
            element={<ProtectedRoute page={Page.LogIn} />}
          />
           <Route
            path={PATHS.DASHBOARD}
            element={<PrivateRoute page={Page.Dashboard} />}
          >
          
            <Route path={PATHS.PRODUCT} element={<PrivateRoute page={Page.ProductInfo} />}/>
            <Route path={PATHS.STACK}  element={<PrivateRoute page={Page.Stack} />}/>
            <Route path={PATHS.ORDERS} element={<PrivateRoute page={Page.Orders} />}/>
            </Route>
             
   
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}
