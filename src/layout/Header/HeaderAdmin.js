import React, { useState, useEffect } from "react";
import style from "../../assets/styles/style.css";
import Logo from "../../componentes/logo/Logo";

import { PATHS } from "../../config/routes.config";
import { Link, Outlet } from "react-router-dom";
import { Box, Grid, Button, ButtonGroup } from "@mui/material";
import {ACCESS_TOKEN} from '../../config/variable.config'

import { useDispatch } from "react-redux";
import { setlogin } from "../../redux/action/AdminSlice";


export default function HeaderAdmin() {
  const dispatch = useDispatch()
  function close(){
    dispatch(setlogin(false))
    localStorage.removeItem(ACCESS_TOKEN)
  }
  return (
    <div>
      
        <Grid
          container
          rowSpacing={1}
          justifyContent="space-between"
          alignItems="center"
          className="header"
        >
          <Grid item xs={3}>
            <Logo />
          </Grid>
          <Grid item xs={7} justifyContent="center">
            <ButtonGroup
              size="large"
              color="secondary"
              aria-label="outlined primary button group"
              sx={{mr:25}}
            >
              <Button value=" product" variant="contained" sx={{ p: 2 }}>
                <Link className='link' to={PATHS.PRODUCT}> کالا</Link>
              </Button>
              <Button value="stack" variant="contained" sx={{ p: 2 }}>
                <Link className='link' to={PATHS.STACK}>مدیریت موجودی و قیمت ها </Link>
              </Button>
              <Button value="order" variant="contained" sx={{ p: 2 }}>
                {" "}
                <Link className='link' to={PATHS.ORDERS}> سفارش</Link>{" "}
              </Button>
              
            </ButtonGroup>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" href="#contained-buttons" >
              <Link className='link' to={PATHS.HOME} onClick={close}>خروج</Link>
            </Button>
          </Grid>
        </Grid>
      
      
    </div>
  );
}
