import React, { useState,useEffect } from 'react'
import Category from '../../componentes/Category/Category'
import {NavLink,Navigate} from 'react-router-dom'
import LayoutUser from '../../layout/LayoutUser'
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import axios from 'axios'
 function Categories() {
  let selectedId = useSelector((state) => state.category);

  console.log( selectedId);
  return (
    <LayoutUser >
   <Grid container spacing={1} justifyContent="center" sx={{m:5}}>
    
       <Category idCategory={selectedId.category} /> 
                
    </Grid>
    </LayoutUser>   
  )
}
export {Categories}

