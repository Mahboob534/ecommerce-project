import React, { useState, useEffect } from "react";
import instanceAxios from "../../Utils/axios";
import {
  Box,
  Grid,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  
} from "@mui/material";
import TableOrders from "./components/TableOrders";
import  getOrderByStatus from '../../api/getAll/getOrderWithStatus'

function Orders() {
  const [row, setRow] = useState([]);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    getData(selectedValue)
  }, [selectedValue])

  async function getData(selectedValue) {
    try {
      const orders = await getOrderByStatus(selectedValue);
      setRow(orders.data) 
    }
     catch (error) {
     alert("loading");
    }
  }
//  console.log(row);

  return (
    <Grid container  >
      <Grid item xs={12} md={8}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ mr:30, mt:5 }}
          >
            <FormControlLabel
              onChange={handleChange}
              value="1"
              control={<Radio />}
              label="سفارشات تحویل داده شده"
            sx={{mr:10 ,fontFamily:" IRANSans-web",textAlign:'center'}}

            />
            <FormControlLabel
              onChange={handleChange}
              value="3"
              control={<Radio />}
              label="سفارشات در حال تحویل "
              sx={{mr:10 ,fontFamily:" IRANSans-web",textAlign:'center'}}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8}>
        <TableOrders row={row} handleChange={handleChange}/>
      </Grid>
    </Grid>
  );
}
export { Orders };
