import React from 'react'


import {PATHS} from '../../config/routes.config'

import LayoutAdmin  from "../../layout/LayoutAdmin"
import LayoutUser from "../../layout/LayoutUser"

function ProtectedRoute(props) {
  const Page =props.page
  const hasLogin=props.hasLogin
  const users=props.users
  
    return (
      
      hasLogin ? ( users === 'User' ? (
       <LayoutUser>
         <Page/>
       </LayoutUser>
     ):(
       <LayoutAdmin>
         <Page/>
       </LayoutAdmin>
     )):(
       <Page/>

     )
    )
       

}

export default ProtectedRoute