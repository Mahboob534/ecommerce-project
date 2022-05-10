import React from "react";

import style from "../../assets/styles/style.css";
import Logo from "../../componentes/logo/Logo";
import SearchBox from "../../componentes/SearchBox/SearchBox";

import {PATHS} from '../../config/routes.config'
import {Link} from 'react-router-dom'
import { Box, Grid, Button } from "@mui/material";
import basket from "../../assets/images/basket.svg";
import user from '../../assets/images/user.svg'
export default function HeaderUser() {
  return (
    <Box sx={{ flexGrow: 1 }} className="header"  alignItems="center">
      <Grid
        container
        rowSpacing={0}
        
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={2} >
          <Logo />
        </Grid>
        <Grid item xs={7} >
          <SearchBox />
        </Grid>
        <Grid item xs={1} sx={{ p: 2 }}>
          <img src={basket} />
          <h5>سبد خرید</h5>
        </Grid>
        <Grid item xs={1} sx={{ p: 2 }} >
          <img src={user} />
         <h4><Link style={{textDecoration:'none'}} to={PATHS.LOGIN}>مدیریت</Link>  </h4> 
        </Grid>
      </Grid>
    </Box>
  );
}
