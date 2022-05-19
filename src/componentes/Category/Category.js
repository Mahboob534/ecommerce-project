import React, { useState, useEffect } from "react";
import CardCat from "../Card/CardCat";
import { NavLink, Navigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import axios from 'axios';
import Styles from './category.module.css'
import { PATHS } from "../../config/routes.config";


export default function Category(props) {
  let idCategory = props.idCategory;
  const [rows, setRows] = useState([]);
  
  
    useEffect(() => {
    getData();
  }, [idCategory]);

  async function getData() {
    try {
      const products = await axios.get(
        `http://localhost:3002/products?category=${idCategory}`
      );
      setRows(products.data.slice(-6));
    } catch (error) {
      alert("loading");
    }
  }
 

  
  return (
    <Grid container  justifyContent="right" sx={{width:"100vw",border:1,borderColor:"grey.200", p:2,borderRadius:5 }}>
      {rows ? (
        rows.map((item) => (
          <Grid item xs={4} >
            <NavLink  to={PATHS.DETAIL } className={Styles.linkCat}>
              <CardCat item={item} key={item.id}  />
            </NavLink>{" "}
          </Grid>
        ))
      ) : (
        <Navigate to="/" />
      )}
    
    </Grid>
    
  );
}
