import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, InputLabel, Button, TextField } from "@mui/material";
import axios from "axios";

import LayoutUser from "../../layout/LayoutUser";
import styled from "styled-components";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import getOneProducts from "../../api/getAll/getOneProduct";
import getAllCategory from "../../api/getAll/getAllCategory";
import { addToCart } from "../../redux/action/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { setOptioalCount } from "../../redux/action/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MagnifierContainer,
  MagnifierPreview,
  MagnifierZoom,
} from "react-image-magnifiers";
import { display } from "@mui/system";
const Title = styled.h2`
  width:100%;
  padding:1% 3% ;
 
`;

const Div = styled.div`
  padding:1% 3%;
  width: 100%;

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
  let [countVal, setCountVal] = useState();

  // let selectedId = useSelector((state) => state.product);
  // console.log(selectedId);
  useEffect(() => {
    getData(selectedId);
  }, [selectedId]);

  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    if (Number(countVal) > Number(product[0].count)) {
      toast.error(
        `محصول مورد نظر شما به تعداد ${product[0].count} موجود می باشد`,
        { position: "bottom-left" }
      );
    } else {
      for (let i = 1; i <= countVal; i++) {
        dispatch(addToCart(product[0]));
      }
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
  // console.log(val);
  return (
    <LayoutUser>
      <ToastContainer />
      <Grid container sx={{ mt: 3 }} >
        <Grid
          sx={{p:4}}
        >
          
            <Grid styles={{display: { xs: "none", sm: "none", md: "flex", lg: "flex" } }}>
            <MagnifierContainer >
              <MagnifierPreview
                style={{ height: "300px", width: "200px" }}
                imageSrc={`http://localhost:3002/files/${product[0].thumbnail}`}
              />
            <MagnifierZoom
                style={{ height: "300px", width: "200px" }}
                imageSrc={`http://localhost:3002/files/${product[0].thumbnail}`}
              />
              </MagnifierContainer>
           </Grid>
          
        </Grid>

        <Grid item xs={12} sm={7} md={5}>
          <Grid sx={{p:3}}>
          <Title>نام کالا : {product[0].name}</Title>
          </Grid>
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
          <Grid sx={{mr:3}}>
          {val != 0 ? (
            <input
              type="number"
              min="0"
              max={`${product[0].count}`}
              style={{ width:"50%" }}
              onChange={(e) => setCountVal(e.target.value)}
            />
          ) : (
            <input
              type="number"
              min="0"
              max={`${product[0].count}`}
              disabled
              style={{ width:'50%'}}
            />
          )}
          </Grid>
          <Grid sx={{m:2}}>
            {val != 0 ? (
              <Button
                variant="contained"
                sx={{
                  m: 2,
                  p: 1,
                  fontFamily: " IRANSans-web",
                  textAlign: "center",
                }}
                onClick={() => handleAddToCart(product)}
              >
                افزودن به سبد خرید{" "}
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{
                  m: 2,
                  p: 1,
                  fontFamily: " IRANSans-web",
                  textAlign: "center",
                }}
                onClick={() => handleAddToCart(product)}
                disabled
              >
                افزودن به سبد خرید{" "}
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{p:3}}>
          <subGroup>
            توضیحات : <br /> {product[0].description}
          </subGroup>
        </Grid>
      </Grid>
    </LayoutUser>
  );
}
export { Detail };
