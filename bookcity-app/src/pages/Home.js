import React from 'react'
import {Link,Outlet} from "react-router-dom"
export default function Home() {
  return (
    <div style={{width:'100vw', height:'70vh'}}>Home
   
    <Outlet /> 
    </div>
  )
}
