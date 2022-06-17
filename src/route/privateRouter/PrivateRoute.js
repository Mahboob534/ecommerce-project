import React from "react";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../config/routes.config";
import { IS_LOGGED_IN,ACCESS_TOKEN } from "../../config/variable.config";
import LayoutAdmin from "../../layout/LayoutAdmin";
import LayoutUser from "../../layout/LayoutUser";
import  {useSelector} from 'react-redux'
import {token} from '../../redux/action/TokenSlice'

function PrivateRoute(props) {
  const Page = props.page;
 
  const admin  = JSON.parse(localStorage.getItem(ACCESS_TOKEN)) 
  
  const isLogged=admin
  console.log(admin);

  if (!isLogged) {
    return <Navigate to={PATHS.LOGIN} replace />;
  } else {
    return (
        
          <Page/>
       
    
    );
    
      }
   
  
}

export default PrivateRoute;
