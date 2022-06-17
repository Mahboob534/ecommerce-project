import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import gatAllProduct from "../../api/getAll/getAllproduct";
import { useSelector } from "react-redux";
import SamplePaginaion from "./components/TableStacks";

function Stack() {
  const [row, setRow] = useState([]);
  const [reload ,setReload]=useState(false) 
  let changeArr = useSelector((state) => state.ArrayIndex);
  console.log(changeArr);
  useEffect(() => {
    getData();
    setReload(false)
  },[reload]);
  async function getData() {
    try {
      const products = await gatAllProduct();
      setRow(products.data);
    } catch (error) {
      alert("loading");
    }
  }

  return (
    <Grid container>
      <Grid item xs={12} md={12} sx={{ mt: 5, px: 5 }}>
        <h2> مدیریت موجودی و قیمت ها </h2>
      </Grid>

      <Grid item xs={12} md={12}>
        <SamplePaginaion setReload={setReload} />
      </Grid>
    </Grid>
  );
}
export { Stack };
