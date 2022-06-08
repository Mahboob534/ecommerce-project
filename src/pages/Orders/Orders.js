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

  const [selectedValue, setSelectedValue] = React.useState("1");

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
      <Grid item xs={12} md={12}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{px:5, mt:5,fontFamily:" IRANSans-web",textAlign:'center' }}
          >
            <FormControlLabel
              onChange={handleChange}
              id="1"
              value="1"
              control={<Radio />}
              label="سفارشات تحویل داده شده"
            sx={{fontFamily:" IRANSans-web",textAlign:'center'}}
            checked={ selectedValue == "1"? true : false }

            />
            <FormControlLabel
              onChange={handleChange}
              id="3"
              value="3"
              control={<Radio />}
              label="سفارشات در حال تحویل "
              sx={{fontFamily:" IRANSans-web",textAlign:'center'}}
              checked={ selectedValue == "3"? true : false }
           
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12}>
        <TableOrders row={row} handleChange={setSelectedValue}/>
      </Grid>
    </Grid>
  );
}
export { Orders };
