import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, InputLabel, Button, TextField } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import LayoutUser from "../../layout/LayoutUser";
import styled from "styled-components";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import getOneProducts from "../../api/getAll/getOneProduct";
import getAllCategory from "../../api/getAll/getAllCategory";
import { addToCart } from "../../redux/action/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";
const Title = styled.h4`
  width: 600px;
  margin: 5% 10%;
  top: 3;
`;

const Div = styled.div`
  margin: 1%;
  width: 600px;
`;
const Image = styled.img`
  width: 250;
  height: 300px;
`;
export default function Detail() {
  let params = useParams();
  let selectedId = params.productId;
  



  const [product, setProduct] = useState("");
  const [productCat, setProductCat] = useState("");
 let [countVal,setCountVal]=useState("")


  // let selectedId = useSelector((state) => state.product);
  // console.log(selectedId);
  useEffect(() => {
    getData(selectedId);
  }, [selectedId]);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
for(let i=1 ;i<=countVal;i++){
  dispatch(addToCart(product[0]));
}
   
  };
  async function getData(selectedId) {
    try {
      const products = await getOneProducts(selectedId);
      const category = await getAllCategory();
      setProduct(products.data);
      setProductCat(category.data);
    } catch (error) {
      alert("loading");
    }
  }

  if (!product || !productCat) return <p> loading</p>;
  const val = product[0].count;
  console.log(val);
  return (
    <LayoutUser>
     <ToastContainer/>
      <Grid container sx={{ mt: 10 }}>
        <Grid item xs={4}>
          <MagnifierContainer style={{ display: "flex", position: "relative" }}>
            <div style={{ flexBasis: "60%" }}>
              <MagnifierPreview
                imageSrc={`http://localhost:3002/files/${product[0].thumbnail}`}
              />
            </div>
            <div style={{ flexBasis: "40%" }}>
              <MagnifierZoom
                style={{ height: "400px", width: "200px" }}
                imageSrc={`http://localhost:3002/files/${product[0].thumbnail}`}
              />
            </div>
          </MagnifierContainer>
        </Grid>
        <Grid item xs={8}>
          <Title>نام کالا : {product[0].name}</Title>
          <Div>
            {" "}
            دسته بندی :{" "}
            {
              productCat.find((itemCat) => itemCat.id == product[0].category)
              .name
            }{" "}
          </Div>
          <br />
          <Div> قیمت : {product[0].price} تومان</Div>
          <br />
          {val != 0 ? (
            <input
              type="number"
              min="0"
              max={`${product[0].count}`}
              style={{ width: "25%" }}
              onChange={(e)=> setCountVal(e.target.value) }
            />
          ) : (
            <input
              type="number"
              min="0"
              max={`${product[0].count}`}
              disabled
              style={{ width: "25%" }}
            />
          )}

          {val != 0 ? (
            <Button
              variant="contained"
              sx={{ mr: 5,fontFamily:" IRANSans-web",textAlign:'center' }}
              onClick={() => handleAddToCart(product)}
            
            >
              افزودن به سبد خرید{" "}
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ mr: 5,fontFamily:" IRANSans-web",textAlign:'center' }}
              onClick={() => handleAddToCart(product)}
              disabled
            >
              افزودن به سبد خرید{" "}
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <subGroup>
            توضیحات : <br /> {product[0].description}
          </subGroup>
        </Grid>
      </Grid>
    </LayoutUser>
  );
}
export { Detail };
