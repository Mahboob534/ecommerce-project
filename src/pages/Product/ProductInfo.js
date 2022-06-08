import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ModalProduct from "../../componentes/Modal/ModalProduct"
import gatAllProduct  from '../../api/getAll/getAllproduct'
import getAllCategory from '../../api/getAll/getAllCategory'
import Table from "./components/Tabel/Table";

export default function ProductInfo() {
  const [row, setRow] = useState([]);
  const [rowCat, setRowCat] = useState([]);
  const [reload, setReload] = React.useState(false);
  useEffect(() => {
    getData();
    setReload(false)
  },[reload]);
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
      <Grid item xs={12} sm={10} md={12} sx={{py:4,px:7 }}>
        <h1>مدیریت کالاها</h1>
      </Grid>
      <Grid item xs={12} sm={12} mx={{sx:0,sm:0,md:15}}>
        <ModalProduct reload={setReload} />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Table row={row} rowCat={rowCat} reload={setReload} />
      </Grid>
    </Grid>
  );
}

export { ProductInfo };
