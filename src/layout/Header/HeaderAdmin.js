import React,{useState,useEffect} from "react";

import style from "../../assets/styles/style.css";
import Logo from "../../componentes/logo/Logo";

import { PATHS } from "../../config/routes.config";
import { Link } from "react-router-dom";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";
import basket from "../../assets/images/basket.svg";
import user from "../../assets/images/user.svg";
import { Dashboard } from "@mui/icons-material";
import {useSelector , useDispatch} from 'react-redux'
import {setProduct} from '../../redux/action/ProductSlice'

export default function HeaderAdmin() {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="header" alignItems="center">
        <Grid
          container
          rowSpacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={4}>
            <Logo />
          </Grid>
          <Grid item xs={8} justifyContent="center">
            <ButtonGroup  size="large" color='secondary'
              
              aria-label="outlined primary button group"
            
            >
              
              <Button  value =" product" variant="contained" sx={{p:5}} onClick={e => <Dashboard rows={e.target.value}/>}>کالا</Button>
              <Button  value ="stack" variant="contained" sx={{p:5}} onClick={e => <Dashboard stack = {e.target.value}/> }>موجودیت </Button>
              <Button  value ="order" variant="contained" sx={{p:5}} onClick={e => <Dashboard order={e.target.value}/>}>سفارش</Button>
            </ButtonGroup>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  );
}
