import React from "react";

import style from "../../assets/styles/style.css";
import Logo from "../../componentes/logo/Logo";
import SearchBox from "../../componentes/SearchBox/SearchBox";

import {PATHS} from '../../config/routes.config'
import {Link} from 'react-router-dom'
import { Box, Grid, Button } from "@mui/material";
import {useSelector} from 'react-redux'
import {setlogin} from '../../redux/action/AdminSlice';
import basket from "../../assets/images/basket.svg";
import user from '../../assets/images/user.svg'
export default function HeaderUser() {
  const checkLog=JSON.parse(localStorage.getItem("login")) 
  
   
  return (
   
      <Grid
        container
             
        justifyContent="space-around"
        alignItems="center"
        className="header"
      >
        <Grid item xs={2} >
          <Logo />
        </Grid>
        <Grid item xs={7} >
          <SearchBox />
        </Grid>
        <Grid item xs={1} sx={{ p: 2 }}>
          <img src={basket} />
          <h4><Link className='link' to={PATHS.CATEGORIES}>سبد خرید</Link> </h4>
        </Grid>
        <Grid item xs={1} sx={{ p: 2 }} >
          <img src={user} />
         <h4><Link className='link' to ={ checkLog ? PATHS.DASHBOARD : PATHS.LOGIN } >مدیریت</Link>  </h4> 
        </Grid>
      </Grid>
   
  );
}
