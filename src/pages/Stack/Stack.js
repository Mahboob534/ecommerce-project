import React, { useState, useEffect } from "react";
import { Grid,Button } from "@mui/material";
import TableStack from "../Stack/components/TableStack";
import axios from "axios";

function Stack() {
  const [row, setRow] = useState([]);
  const[flag,setFlag]=useState({"id":true})
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
      <Button sx={{backgroundColor:"#86efac", width:'100px', m:3 }} variant="outlined" > ذخیره</Button>
      </Grid>

      <Grid item xs={12} md={8}>
        <TableStack row={row} />
      </Grid>
    </Grid>
  );
}
export { Stack };
