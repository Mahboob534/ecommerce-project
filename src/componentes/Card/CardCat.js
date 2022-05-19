import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useDispatch } from "react-redux";
import {setProduct} from '../../redux/action/ProductSlice'
export default function CardCat(props) {
  let product = props.item;
 const dispatch=useDispatch()

  return (
    <Card sx={{ width: 250, height: 270 }} onClick={()=>dispatch(setProduct(product.id))}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="80"
          sx={{ objectFit: "fill" }}
          image={`http://localhost:3002/files/${product.thumbnail}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2">
            <h3> قیمت: {product.price}</h3>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
