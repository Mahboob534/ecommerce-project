import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Home() {
  return (
    <div style={{ height:'70vh'}}>Home
   
    <Outlet /> 
    </div>
  )
}
