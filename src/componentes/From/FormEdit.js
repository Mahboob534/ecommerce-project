import React, { useRef } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import image from "../../assets/images/book-1.png";
import { ToastContainer, toast } from "react-toastify";
import RecentActorsTwoToneIcon from "@mui/icons-material/RecentActorsTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import { caterories } from './caterories';
import {
    Container,
    Typography,
    Box,
    Grid,
    TextField,
     Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
  } from "@mui/material";
  import axios from "axios";
  import addProduct from '../../api/postAll/AddProduct'
import UploadImage from '../../api/postAll/UploadImage'

  const validationSchema = yup.object().shape({
    name: yup.string().required(" فیلد ضروری است"),
    price: yup.number().required(" فیلد ضروری است"),
    count: yup.number().required(" فیلد ضروری است"),
    publishers: yup.string().required(" فیلد ضروری است"),
    category: yup.string().required(" فیلد ضروری است"),
    description: yup.string().required(" فیلد ضروری است"),
  });
  const FormEdit = ({ data }) => {
    const thumbnailRef = useRef("");
    const gallaryRef = useRef("");
    const formik = useFormik({
      enableReinitialize:true,
      initialValues: {
        name: data.name ,
        price: data.price,
        count: data.count,
        publishers: data.publishers ,
        category: data.category ,
        thumbnail: data.thumbnail ,
         description:data.description ,
      },
      onSubmit: (values) => {
        const formData = new FormData();
         Object.entries(values).map((key, value) => {
          formData.append(key[0], key[1]);
        });
        const x=Object.fromEntries(formData)
        console.log(x);
        for (let pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
      axios
          .put(`http://localhost:3002/products/${data.id}`,values)
          .then((res) => {
       
            if (res.status == 200) {
               toast.success("اطلاعات با موفقیت ثبت شده است", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                window.location.reload(true);
            }
          })
          .catch((err) =>
            toast.error("عملیات به درستی انجام نشده است", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
      })
          );
   
      //  resetForm({values:''})
        
      },
      validationSchema,
    });
    
    const handleChange = async (e) => {
      const data = e.target.files[0];
      const formData = new FormData();
      formData.append("image", data);
     const filename =await UploadImage(formData)
      console.log(filename.data.filename);
      formik.setFieldValue("thumbnail", filename.data.filename, false);
     
    };
  
    
  
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <ToastContainer />
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{  border: "1px solid black", borderRadius: "5px" }}
        >
          <Grid container>
            <Grid item>
              {" "}
              <TextField
                margin="dense"
                size="small"
                required
                id="name"
                name="name"
                placeholder="نام کالا"
                autoComplete="name"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.name}
                helperText={
                  formik.errors.name && formik.touched.name && formik.errors.name
                }
              />
            </Grid>
            <Grid item>
              {" "}
              <TextField
                margin="dense"
                size="small"
                required
                fullWidth={true}
                name="price"
                placeholder="قیمت"
                type="price"
                id="price"
                autoComplete="current-price"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.price}
                helperText={
                  formik.errors.price &&
                  formik.touched.price &&
                  formik.errors.price
                }
              />
            </Grid>
            <Grid item>
              {" "}
              <TextField
                margin="dense"
                size="small"
                required
                fullWidth={true}
                name="count"
                placeholder="تعداد"
                type="count"
                id="count"
                autoComplete="current-count"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.count}
                helperText={
                  formik.errors.count &&
                  formik.touched.count &&
                  formik.errors.count
                }
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <TextField
                margin="dense"
                size="small"
                required
                fullWidth={true}
                name="published"
                placeholder="انتشارات"
                type="text"
                id="txtpub"
                autoComplete="current-wieght"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.publishers}
                helperText={
                  formik.errors.publishers &&
                  formik.touched.publishers &&
                  formik.errors.publishers
                }
              />
            </Grid>
          <Grid item xs={8}>
            <TextField
              select
              margin="dense"
              size="small"
              required
              fullWidth={true}
              name="category"
              placeholder="دسته بندی"
              type="select"
              label="دسته بندی"
              id="category"
              autoComplete="current-category"
              color="success"
             
              onChange={formik.handleChange}
              value={formik.values.category}
              helperText={
                formik.errors.category &&
                formik.touched.category &&
                formik.errors.category
              }
            >
              {caterories.map((category) => (
                <MenuItem  sx={{color:"black"}} key={category.value} value={category.value}>
                  {category.label}
              
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ width: "2rem", height: ".3rem", background: "lightGreen" }}
            >
              <Button
                variant="outlined"
                fullWidth={true}
                component="label"
                color="success"
                //  sx={{mx:2}}
                value={formik.values.image}
                helperText={
                  formik.errors.thumbnail &&
                  formik.touched.thumbnail &&
                  formik.errors.thumbnail
                }
              >
                بارگذاری عکس بندانگشنی
                <input
                  accept="image/jpg,image/jpeg"
                  type="file"
                  hidden
                  id="thumbnail"
                  name="thumbnail"
                  required
                  onChange={async (e) => {
                    handleChange(e);
      
                  }}
                />
                
                <RecentActorsTwoToneIcon sx={{ mr: 4, my: 1 }} />
              </Button>
            </Grid>
            <Grid item xs={12} md={7} sx={{ width: "2rem", height: "5rem" }}>
              <Box
                fullWidth={true}
                style={{
                  backgroundImage: `url(http://localhost:3002/files/${data.thumbnail})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  width: "6rem",
                  height: "6rem",
                  color: "#f5f5f5",
                  marginRight: "auto",
                }}
              >
                <Box component="span" sx={{ color: "red" }}>
                  <CloseIcon />
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          <Grid container>
            <Grid >
              <TextField
                margin="normal"
                multiline
                required
                fullWidth={true}
                sx={{width:'400px'}}
                placeholder="توضیحات"
                name="description"
                type="description"
                id="description"
                autoComplete="current-description"
                color="success"
                onChange={formik.handleChange}
                value={formik.values.description}
                helperText={
                  formik.errors.description &&
                  formik.touched.description &&
                  formik.errors.description
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth={true}
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            افزودن
          </Button>
        </Box>
      </Box>
    );
  };
  
  export default FormEdit;
  