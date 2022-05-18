import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TableStack from "../Stack/components/TableStack";
import axios from "axios";
import ModalProduct from "../../componentes/Modal/ModalProduct";
function Stack() {
  const [row, setRow] = useState([]);

  // const getProduct = async () => {

  //   const res = await fetch("http://localhost:3002/products");
  //   const data = await res.json();
  //      setRow(data)
  // };

  useEffect(() => {
    axios.get("http://localhost:3002/products").then((res) => setRow(res.data));
  }, []);

  // console.log(row);
  return (
    <Grid container >
      <Grid item xs={6} md={4} sx={{ mr:30 }}>
        <h1 > مدیریت موجودی و قیمت ها </h1>
      </Grid>
      <Grid item xs={6} md={4}>
        <ModalProduct hand />
      </Grid>

      <Grid item xs={12} md={8}>
        <TableStack row={row} />
      </Grid>
    </Grid>
  );
}
export { Stack };
