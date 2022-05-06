import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LayoutAdmin from '../layout/LayoutAdmin'
import LayoutUser from '../layout/LayoutUser';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home'
import SubGroup from "../pages/SubGroup";
import ProductInfo from '../pages/ProductInfo'
import LogIn from '../pages/LogIn'
import Detail from '../pages/Detail'
import Buy from '../pages/Buy'
export default function RouteApp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutUser><Home /></LayoutUser>}/>
      <Route  path="/product" element={<LayoutUser><SubGroup /></LayoutUser>}/>
      <Route  path="/product/ProductInfo" element={<LayoutUser>< ProductInfo/></LayoutUser>}/>
      <Route  path="/product/Detail" element={<LayoutUser>< Detail/></LayoutUser>}/>
      <Route  path="/product/Detail/Buy" element={<LayoutUser><Buy/></LayoutUser>}/>
      <Route  path="/LogIn" element={< LogIn/>}/>
      <Route  path="/Dashboard" element={<LayoutAdmin>< Dashboard/></LayoutAdmin>}/>  
    </Routes>
    </BrowserRouter>
  );
}
