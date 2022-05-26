import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ModalProduct from "../../componentes/Modal/ModalProduct"
import gatAllProduct  from '../../api/getAll/getAllproduct'
import getAllCategory from '../../api/getAll/getAllCategory'
import Table from "./components/Tabel/Table";

export default function ProductInfo() {
  const [row, setRow] = useState([]);
  const [rowCat, setRowCat] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const products = await gatAllProduct();
      const category = await getAllCategory() ;
     setRow(products.data);
      setRowCat(category.data);
    } catch (error) {
     alert("loading");
    }
  }
 // console.log(rowCat);
  return (
    <Grid container >
      <Grid item xs={6} md={4} sx={{ mr: 25 }}>
        <h1>مدیریت کالاها</h1>
      </Grid>
      <Grid item xs={6} md={4}>
        <ModalProduct hand />
      </Grid>
      <Grid item xs={12} md={8}>
        <Table row={row} rowCat={rowCat} setRow={setRow} setRowCat={setRowCat} />
      </Grid>
    </Grid>
  );
}

export { ProductInfo };
