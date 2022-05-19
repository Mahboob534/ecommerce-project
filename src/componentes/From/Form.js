import React, { useState } from "react";
import { ACCESS_TOKEN } from "../../config/variable.config";
import {
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import axios from "axios";

const skills = ["داستان", "آشپزی", "آموزش", "ادبیات", "هنری"];

export default function Form() {
  const [value, setValue] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.name !== "thumbnail") {
      setValue({ ...value, [e.target.name]: e.target.value });
    } else {
      let files = e.target.files[0];
      console.log("thumbnail", e.target.files);
      setValue({ ...value, [e.target.name]: files });
    }
  };
console.log(value);
 async function submit() {
    const formData = new FormData();
    Object.entries(value).map((entry) => {
      console.log(entry);
      formData.append(entry[0], entry[1]);
      })

  try {
    // make axios post request
    const response = await axios({
      method: "post",
      url: "http://localhost:3002/upload",
      data: formData['thumbnail', File],
      headers: {  Authorization:`${ACCESS_TOKEN}` },
    });
  } catch(error) {
    console.log(error)
  }
}

    
    
    // Object.entries(formData).map((item)=>{
    //   const res = axios
    //   .post("http://localhost:3002/upload", item ,{
    //     headers:{
    //      Authorization:`${ACCESS_TOKEN}`
          
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    // })
      

    

        
      
      
      // fetch('http://localhost:3002/upload', {
      //   method: 'POST',
      //   body: formData
      // }).then(res=> res.json()).then(res=>{
      //     console.log(res)
      // })

  
  return (
    <Grid container sx={{width:600}}>
      <Grid item xs={12} md={8}>
        <form>
          <TextField
            label="تصویر کالا"
            name="thumbnail"
            type="file"
            
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />

          <br />
          <TextField
            label=" نام کالا"
            name="name"
            type="text"
            onChange={(e) => handleChange(e)}
            margin="normal"
            fullWidth
          />
          <br />
          <FormControl fullWidth>
            <InputLabel htmlFor="categoryLbl">دسته بندی کالا</InputLabel>
            <Select name="category" fullWidth
            
             onChange={(e) => handleChange(e)}>
              {skills.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
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
          <Button color="primary" variant="contained" onClick={submit}>
            ذخیره
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
