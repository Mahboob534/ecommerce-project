import React, { useRef } from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import { ToastContainer, toast } from "react-toastify";
import RecentActorsTwoToneIcon from "@mui/icons-material/RecentActorsTwoTone";
import CollectionsTwoToneIcon from "@mui/icons-material/CollectionsTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import { caterories } from "./caterories";
import swal from "sweetalert";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import addProduct from "../../api/postAll/AddProduct";
import UploadImage from "../../api/postAll/UploadImage";
import Perview from "./Perview";
const validationSchema = yup.object().shape({
  name: yup.string().required(" فیلد ضروری است"),
  price: yup.number().required(" فیلد ضروری است"),
  count: yup.number().required(" فیلد ضروری است"),
  author: yup.string().required(" فیلد ضروری است"),
  yearOfPublication: yup.number().required(" فیلد ضروری است"),
  publishers: yup.string().required(" فیلد ضروری است"),
  category: yup.string().required(" فیلد ضروری است"),
  description: yup.string().required(" فیلد ضروری است"),
});
const FormProduct = (props) => {
  let data = props.data;
  let reload = props.reload;
  let setOpen=props.set1Open
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data.name,
      price: data.price,
      count: data.count,
      author: data.author,
      Translator: data.Translator,
      publishers: data.publishers,
      yearOfPublication: data.yearOfPublication,
      category: data.category,
      thumbnail: data.thumbnail,
      images: data.images,
      description: data.description,
    },
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      Object.entries(values).map((key, value) => {
        console.log("value in entries map", key[0], key[1]);
        if (key[0] === "images") {
          console.log(key[1]);
          key[1].map((item, index) => {
            formData.append(`images[${index}]`, item);
          });
        } else {
          formData.append(key[0], key[1]);
        }
      });

      swal({
        title: ` ویرایش`,
        text: "آیا کالا مورد نظر ویرایش شود؟ ",
        icon: "warning",
        buttons: ["خیر", "بله"],
        dangerMode: true,
      }).then(async (willEdit) => {
        if (willEdit) {
          axios
            .put(`http://localhost:3002/products/${data.id}`, values)
            .then((res) => {
              console.log("succeed");
            });

          await swal("محصول با موفقیت ,ویرایش شد", {
            icon: "success",
          });
        } else {
          await swal("محصول ویرایش نشد");
        }
        reload(true);
        setOpen(false)
        
      });

      resetForm({ values: "" });
    },
    validationSchema,
  });

  const handleChange = async (e) => {
    const data = e.target.files[0];
    const formData = new FormData();
    formData.append("image", data);
    const filename = await UploadImage(formData);
    console.log(filename.data.filename);
    formik.setFieldValue("thumbnail", filename.data.filename, false);
  };
  const handleBulkImageChange = async (e) => {
    console.log("handlebulk enterd");
    const files = Array.from(e.target.files);
    console.log(files);
    let temp = [];
    files.map((item) => {
      const formData = new FormData();
      formData.append("image", item);
      const tempRequest = UploadImage(formData);
      temp.push(tempRequest);
    });
    console.log(temp);
    const arrayResponse = await Promise.all(temp);
    //(i) => i.data.filename
    const resultArray = arrayResponse.map(function (item) {
      return item["data"]["filename"];
    });
    console.log("resultArray", resultArray);
    formik.setFieldValue("images", resultArray, true);
    console.log("values", formik.values.images);
  };
  const handleDeleteImage = (index) => {
    if (index == null) {
      formik.values.thumbnail = "";
      console.log("thumbnail was clicked", index);
      return;
    }
    console.log("gallary was clicked", index);
    formik.values.images[index] = "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ border: "1px solid black", borderRadius: "5px", width: "60vw" }}
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

          <Grid item>
            {" "}
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth={true}
              name="author"
              placeholder="نویسنده"
              type="author"
              id="author"
              autoComplete="current-count"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.author}
              helperText={
                formik.errors.author &&
                formik.touched.author &&
                formik.errors.author
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
              name="Translator"
              placeholder="مترجم"
              type="text"
              id="Translator"
              autoComplete="current-wieght"
              color="success"
              onChange={formik.handleChange}
              value={formik.values.Translator}
              helperText={
                formik.errors.Translator &&
                formik.touched.Translator &&
                formik.errors.Translator
              }
            />
          </Grid>
          <Grid item>
            <TextField
              margin="dense"
              size="small"
              required
              fullWidth={true}
              name="publishers"
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
          <Grid item xs={5}>
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
              sx={{ direction: "rtl" }}
              onChange={formik.handleChange}
              value={formik.values.category}
              helperText={
                formik.errors.category &&
                formik.touched.category &&
                formik.errors.category
              }
            >
              {caterories.map((category) => (
                <MenuItem
                  sx={{ color: "black" }}
                  key={category.value}
                  value={category.value}
                >
                  {category.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          MenuItem
        </Grid>
        <Grid container>
          <TextField
            margin="dense"
            size="small"
            required
            name="yearOfPublication"
            placeholder="سال نشر"
            type="text"
            id="yearOfPublication"
            autoComplete="current-wieght"
            color="success"
            onChange={formik.handleChange}
            value={formik.values.yearOfPublication}
            helperText={
              formik.errors.yearOfPublication &&
              formik.touched.yearOfPublication &&
              formik.errors.yearOfPublication
            }
          />
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
              value={formik.values.thumbnail}
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
          <Grid item xs={12} md={7} sx={{ width: "2rem", height: "4rem" }}>
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
              {formik.values.thumbnail ? (
                <Perview
                  src={formik.values.thumbnail}
                  delImg={() => handleDeleteImage()}
                />
              ) : (
                ""
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ my: 2 }}>
          <Grid item xs={12} sx={{ m: 1 }}>
            <Button
              // sx={{ my: 1 }}
              size="small"
              variant="outlined"
              fullWidth={true}
              component="label"
              color="success"
              value={formik.values.images}
            >
              <Typography>بارگذاری عکس گالری</Typography>

              <input
                accept="image/jpg,image/jpeg"
                type="file"
                id="gallery"
                name="gallery"
                required
                hidden
                multiple
                onChange={(e) => {
                  handleBulkImageChange(e);
                }}
              />
              <CollectionsTwoToneIcon sx={{ mr: 4, my: 1 }} />
            </Button>
            <span>
              {formik.errors.gallery &&
                formik.touched.gallery &&
                formik.errors.gallery}
            </span>
          </Grid>
          <Grid
            item
            style={{
              backgroundImage: `url(http://localhost:3002/files/${data.images})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              color: "#f5f5f5",
              marginRight: "auto",
            }}
            sx={{
              bgcolor: "lightgray",
              m: 1,
              width: "80%",
              minHeight: "6rem",
              border: "2px dashed black",
              display: "flex",
            }}
          >
            {formik.values.images
              ? formik.values.images.map((item, index) => (
                  <Perview
                    src={item}
                    key={index}
                    delImg={() => handleDeleteImage(index)}
                  />
                ))
              : ""}
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <TextField
              margin="normal"
              multiline
              required
              fullWidth={true}
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

export default FormProduct;
