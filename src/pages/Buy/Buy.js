import React, { useState, useEffect } from "react";
import Styles from "./Buy.module.css";
import LayoutUser from "../../layout/LayoutUser";
import { Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { useSelector, useDispatch } from "react-redux";
import {setOrders} from '../../redux/action/orederSlice'
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  firstName: yup.string().required(" فیلد ضروری است"),
  lastName: yup.string().required(" فیلد ضروری است"),
  billingAddress: yup.string().required(" فیلد ضروری است"),
  phone: yup.string().matches(phoneRegExp, "شماره همراه درست وارد نشده"),
});
function Buy() {
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart.cartItems);
  const [product,setproduct]=useState()
  
  const [order, setOrder] = useState({orderItems:[]});
  const productarr=[]
const dispatch=useDispatch()
async function productfun(){
  cart.map((index)=>{
  productarr.push({"id":index.id,"quantity":index.cartQuantity })
  
})
   
}
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      billingAddress: "",
      shippingAddress: "",
      phone: "",
      dateDeliver: "",
    },
    validationSchema,
    onSubmit: async (values ,{resetForm}) => {
          await(productfun())
      if(cart.length > -1){
        setOrder({
          "username": "admin",
          "orderStatus": "3",
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          billingAddress: values.billingAddress,
          shippingAddress: values.shippingAddress,
          "purchaseTotal": cartTotalAmount,
          delivery: values.dateDeliver ,
          orderItems:productarr
        });
      }
      
      resetForm({values:''})
    },
  });
  
  // function toTimestamp(strDate){
  //   var datum = Date.parse(strDate);
  //   return datum;
  //  } 
//  console.log(order.orderItems.length);
console.log(order);   
useEffect(() => {
  if(order.orderItems.length > 0 ) {
    localStorage.setItem("orders", JSON.stringify(order)); 
      dispatch(setOrders({
          ...order,
             
  }));
 
     window.location.replace("http://127.0.0.1:5500/public/payment.html");
  }
}, [order])
const orders = useSelector((state) => state.orders);

  return (
    <LayoutUser>
      <form onSubmit={formik.handleSubmit}>
        <Grid container sx={{ m: 8 }}>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <label> نام </label>
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                size="small"
                required
                id="firstName"
                name="firstName"
                autoComplete="firstName"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                helperText={
                  formik.errors.firstName &&
                  formik.touched.firstName &&
                  formik.errors.firstName
                }
              />
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3}>
              <label> نام خانوادگی </label>
            </Grid>
            <Grid item xs={3}>
              <TextField
                margin="dense"
                size="small"
                required
                id="lastName"
                name="lastName"
                placeholder=" نام خانوادگی  "
                autoComplete="lastName"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                helperText={
                  formik.errors.lastName &&
                  formik.touched.lastName &&
                  formik.errors.lastName
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={2}>
              <label>آدرس</label>
            </Grid>
            <Grid item xs={4}>
              <TextField
                margin="dense"
                size="small"
                required
                id="billingAddress"
                name="billingAddress"
                multiline
                autoComplete="billingAddress"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.billingAddress}
                helperText={
                  formik.errors.billingAddress &&
                  formik.touched.billingAddress &&
                  formik.errors.billingAddress
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <label> آدرس تحویل محصول</label>
            </Grid>
            <TextField
              margin="dense"
              size="small"
              required
              id="shippingAddress"
              name="shippingAddress"
              multiline
              autoComplete="shippingAddress"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.shippingAddress}
              helperText={
                formik.errors.shippingAddress &&
                formik.touched.shippingAddress &&
                formik.errors.shippingAddress
              }
            />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <label>تلفن همراه</label>
            </Grid>

            <TextField
              margin="dense"
              size="small"
              required
              id="phone"
              name="phone"
              autoComplete="phone"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.phone}
              helperText={
                formik.errors.phone &&
                formik.touched.phone &&
                formik.errors.phone
              }
            />
          </Grid>
          <Grid
            item
            xs={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid>
              <label>تاریخ تحویل </label>
            </Grid>

            <DatePicker
              calendar={persian}
              locale={persian_fa}
              calendarPosition="bottom-right"
              weekPicker={false}
              onChange={(e)=> formik.setFieldValue("dateDeliver", e.unix * 1000,true)}
              value={formik.values.dateDeliver}
              helperText={
                formik.errors.dateDeliver &&
                formik.touched.dateDeliver &&
                formik.errors.dateDeliver
              }
              minDate={new DateObject({ calendar: persian })}
              //disabled={sendToDefaultAddress}
              inputClass={Styles.custom_input}
            />
          </Grid>
        </Grid>
        <Button sx={{ mr: 80 }} variant="contained" type="submit">
          پرداخت
        </Button>
      </form>
    </LayoutUser>
  );
}
export { Buy };
