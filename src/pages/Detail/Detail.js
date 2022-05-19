import React, { useState, useEffect } from "react";
import { Grid, InputLabel, Button, TextField } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import LayoutUser from "../../layout/LayoutUser";
import styled from "styled-components";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
const Title = styled.h2`
  width: 250px;
  margin: 5% 10%;

  top: 3;
`;

const subGroup = styled.h4`
  margin:15%
  width: 200px;
  
  top: 3;
`;
const Image = styled.img`
  width: 150;
  height: 200px;
`;
export default function Detail() {
  const [row, setRow] = useState("");
  const [rowCat, setRowCat] = useState("");
  let selectedId = useSelector((state) => state.product);
  console.log(selectedId);
  useEffect(() => {
    getData();
  }, [selectedId]);

  async function getData() {
    try {
      const products = await axios.get(
        `http://localhost:3002/products?id=${selectedId}`
      );
      const category = await axios.get("http://localhost:3002/category");
      setRow(products.data);
      setRowCat(category.data);
    } catch (error) {
      alert("loading");
    }
  }

  if (!row || !rowCat) return <p> loading</p>;
  return (
    <LayoutUser>
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={4}>
          <Image src={`http://localhost:3002/files/${row[0].thumbnail}`} />
        </Grid>
        <Grid item xs={8}>
          <Title>نام کالا : {row[0].name}</Title>
          <subGroup>
            {" "}
            دسته بندی :{" "}
            {rowCat.find((itemCat) => itemCat.id == row[0].category).name}{" "}
          </subGroup>
          <br />
          <subGroup>قیمت : {row[0].price}</subGroup>
          <br />

          <TextField
            id="count"
            label="count"
            type="number"
            value="count"
            InputLabelProps={{ shrink: true }}
            placeholder="1"
            margin="normal"
            sx={{ direction: "rtl" }}
          />

          <Button variant="contained" sx={{ mr: 5 ,mt:3}}>
            افزودن به سبد خرید{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <subGroup>
            توضیحات : <br /> {row[0].description}{" "}
          </subGroup>
        </Grid>
      </Grid>
    </LayoutUser>
  );
}
export { Detail };
