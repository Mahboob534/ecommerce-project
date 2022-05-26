import React, { useState, useEffect } from "react";
import { Grid,Button } from "@mui/material";
import TableStack from "../Stack/components/TableStack";
import gatAllProduct  from '../../api/getAll/getAllproduct'
import { useSelector } from "react-redux";
import axios from 'axios'
function Stack() {
  const [row, setRow] = useState([]);
  const[flag,setFlag]=useState({"id":true})
  let changeArr = useSelector((state) => state.ArrayIndex);
console.log(changeArr);
  useEffect(() => {
    getData()
  }, []);
  async function getData() {
    try {
      const products = await gatAllProduct();
           setRow(products.data);
     
    } catch (error) {
     alert("loading");
    }
  }
  //  function handleEdit(){
  // changeArr.map((index)=>{
  //   const updatePro= row.find((item)=>item.id===index)
    
  //    axios.put(`http://localhost:3002/products/${index}`,updatePro).then(res => console.log(res.data))
    
  // })
  // }
  // console.log(row);
  return (
    <Grid container >
      <Grid item xs={6} md={12} sx={{ mr:30 }}>
        <h1 > مدیریت موجودی و قیمت ها </h1>
      </Grid>
      

      <Grid item xs={12} md={8}>
        <TableStack row={row} />
      </Grid>
    </Grid>
  );
}
export { Stack };
