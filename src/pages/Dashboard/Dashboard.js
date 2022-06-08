import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import LayoutAdmin from "../../layout/LayoutAdmin";



function Dashboard() {
  // let dispatch=useDispatch()
  //  const [rowCat,setRowCat]=useState([])
  //  useEffect(()=>{
  //   axios.get("http://localhost:3002/category").then((res)=> dispatch(setres.data) )
  // })
  // dispatch()
  return (
    <LayoutAdmin>
       
    <div style={{height:"100vh"}}>
    
      <Outlet />
    
    </div>
    </LayoutAdmin>
  );
}

export { Dashboard };
