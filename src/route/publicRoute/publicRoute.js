import React from 'react'


import {PATHS} from '../../config/routes.config'

import LayoutAdmin  from "../../layout/LayoutAdmin"
import LayoutUser from "../../layout/LayoutUser"

function ProtectedRoute(props) {
  const Page =props.page
 
    return (
          
       <Page/>

    
    )
       

}

export default ProtectedRoute