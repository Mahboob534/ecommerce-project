import React from "react";
import style from "../../assets/styles/style.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { Button, CardActionArea } from "@mui/material";
import { NavLink, Navigate } from "react-router-dom";
import { addToCart } from "../../redux/action/cartSlice";
import Styles from '../Category/category.module.css'
export default function CardCat(props) {
  let product = props.item;
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
  };
  return (
    <Card sx={{ width: 230, height: 240, m: 2 }}>
       <NavLink  to={`/Detail/${product.id}`} className={Styles.linkCat}>
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
          <Typography gutterBottom variant="h6" component="div" sx={{m:1}}>
            <h6>{product.name}</h6>
          </Typography>
          <Typography variant="body2">
            <h4> قیمت: {product.price} تومان</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
      </NavLink>
      <Button className="IRANSans" size="large" color="primary" sx={{ mr: 2,fontFamily:" IRANSans-web",textAlign:'center' }} onClick={() => handleAddToCart(product)}>
        اضافه کردن به سبد خرید
      </Button>
    </Card>
  );
}
