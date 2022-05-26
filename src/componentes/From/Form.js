import React, { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";

import addProduct from '../../api/postAll/AddProduct'
import UploadImage from '../../api/postAll/UploadImage'

const skills = ["داستان", "آشپزی", "آموزش", "ادبیات", "هنری"];

export default function Form() {
  const [value, setValue] = useState();
  

  const handleChange = async (e) => {
    if (e.target.name !== "image") {
      
      setValue({ ...value, [e.target.name]: e.target.value });
    } else {
      var files = e.target.files[0];
    const imageFile=new FormData()
    imageFile.append("image",files)
      let image=""
       const response =await UploadImage(imageFile)
        
         image = await response.data.filename 
      
      setValue({ ...value, [e.target.name]: image });
    }
  };
//console.log(value);
 async function submit() {
   
    const formData = new FormData();
    Object.entries(value).map((entry) => {
     console.log(entry);
       formData.append(entry[0], entry[1]);
       })
       const x=Object.fromEntries(formData)
      
     const date=new Date(0)
    
      let product={
        "name": x.name,
        "category": x.category,
        "publishers": "خیام",
        "author": "فکور اصغر",
        "Translator": "",
        "year of publication": 1400,
        "price": "40000",
        "count": "50",
        "description": x.description,
        "images": [
          x.image
        ],
        "thumbnail": x.image,
    
      } 
      try {
        addProduct(product)
        alert("کالا با موفقیت ثبت شد");
        window.location.reload(true);
    } catch (e) {
        alert("كالا ثبت نشد")


     }
 }
 
  return (
    <Grid container sx={{width:600}}>
      <Grid item xs={12} md={8}>
        <form >
        <TextField
            label=" تصویر کالا"
            name="image"
            type="file"
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />
          {/* <ImageUpload/> */}
          <br />
          <TextField
            label=" نام کالا"
            name="name"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
           
          />
        
          <FormControl >
            <InputLabel htmlFor="categoryLbl">دسته بندی کالا</InputLabel>
            <Select name="category" fullWidth
            
             onChange={(e) => handleChange(e)}>
              {skills.map((category,id) => (
                <MenuItem key={id} value={skills.indexOf(category)}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <br />
          <TextField
            label=" نام نویسنده"
            name="author"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
            
          />
          <TextField
            label=" نام مترجم"
            name="Translator"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
            
          />
          <br/>
          <TextField
            label=" انتشارات"
            name="publishers"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
          
          />
          <TextField
            label=" سال نشر"
            name="year of publication"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
           
          />
          <br/>
          <TextField
            label=" موجودی"
            name="count"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
            
          />
          <TextField
            label=" قیمت"
            name="price"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
            
          />
          <br/>
          <TextField
            label="توضیحات"
            name="description"
            multiline
            rows="4"
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />
          <br />
          <Button color="primary" variant="contained"  onClick={submit} >
            ذخیره
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
