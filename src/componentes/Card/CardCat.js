import React from "react";
import Styles from './CardCat.module.css'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Button, CardActionArea } from "@mui/material";
import { NavLink} from "react-router-dom";
import { addToCart } from "../../redux/action/cartSlice";

import { ToastContainer, toast } from "react-toastify";
export default function CardCat(props) {
  let product = props.item;
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (product.count == 0 || Number(product.count)-Number(product.cartQuantity) < product.cartQuantity){
      toast.error("محصول موجودی ندارد", {position: "bottom-left",})
    }else {
      
      dispatch(addToCart(product));
    }
  
   
  };
  return (
  
    <Card sx={{ width: 230, height: 240 }}>
      <ToastContainer/>
       <NavLink  to={`/Detail/${product.id}`} className={Styles.link}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          width="20"
          sx={{ objectFit: "fill" }}
          image={`http://localhost:3002/files/${product.thumbnail}`}
          alt="green iguana"
        />
        <CardContent sx={{fontFamily:"IRANSans-web",fontSize:'12px'}}>
          <Typography gutterBottom variant="h6" component="div" >
            <h6>{product.name}</h6>
          </Typography>
          <Typography  >
            <h4> قیمت: {product.price} تومان</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
      </NavLink>
      <Button  size="large" color="primary" sx={{ mt:{xs:2,sm:2,md:0},p:2, fontFamily:" IRANSans-web",textAlign:'center' }} onClick={() => handleAddToCart(product)}>
        اضافه کردن به سبد خرید
      </Button>
    </Card>
  );
}
