import React, { useState, useMemo } from "react";
import Styles from './Categories.module.css'
import image from "../../assets/images/loader-img.gif";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import LayoutUser from "../../layout/LayoutUser";
import {
  Grid,
  Box,
  Pagination,
  Typography,TextField,MenuItem
  } from "@mui/material";
 import {SortPrice} from './SortPrice' 

import Category from "../../componentes/Category/Category";
import { useFetch } from "../Stack/components/usefetch";


function Categories() {
  let params = useParams();
  let idCategory = params.categoryId;
const [value,setValue]=React.useState()
  const limit = useMemo(() => 5, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/Subgroup?_page=${activePage}&_limit=${limit}&category=${idCategory}`
  );
  if (error) {
    return (
      <>
        <Typography variant="body1">ERROR - Typography Body1</Typography>
        <Typography variant="body2">ERROR - Typography Body2</Typography>
      </>
    );
  }
 console.log('value',value);
  return (
    <LayoutUser>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         
          marginInline: 2,
         
          direction: "rtl",
          fontFamily: " IRANSans-web",
        }}
      >
        {loading ? (
          <Box
            sx={{
              position: "absolute",
              background: "#fafafa",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={image} alt="" />
          </Box>
        ) : (
          <Grid container justifyContent="center" sx={{ my: 2 }}>
            
            {data.data.map((item, id) => (
              <Grid
                sx={{
                  border: 1,
                  borderColor: "grey.400",
                  p: 2,
                  borderRadius: 5,
                  my:2
                }}
              >
                <Grid  sx={{backgroundColor:'#27ae60',textAlign:'center',p:2,borderRadius:5}}>
                  <Link
                    to={`/Categories/${item.category}/${item.name}`}
                    className={Styles.link}
                    id={item.id}
                  >
                    <h3 key={id}> {item.name}</h3>
                  </Link>
                </Grid>
                <Category
                  idCategory={item.category}
                  Subgroup={item.name}
                  key={id}
                />
              </Grid>
            ))}
          </Grid>
        )}



<TextField
              select
              margin="dense"
              size="small"
              required
              fullWidth={true}
              name="sort"
              type="select"
              label="مرتب سازی"
              id="sort"
              autoComplete="current-sort"
              color="success"
             sx={{direction:"rtl"}}
             value={value}
             onChange={(e)=> setValue(e.target.value)}
              
            >
              {SortPrice.map((category) => (
                <MenuItem  sx={{color:"black"}} key={category.value} value={category.value}>
                  {category.label}
              
                </MenuItem>
              ))}
            </TextField>
        <Pagination
          variant="outlined"
          defaultPage={1}
          page={activePage}
          count={Math.ceil(data?.headers["x-total-count"] / limit)}
          onChange={(_, page) => {
            console.log("page:", page);
            setActivePage(page);
          }}
        />
      </Box>
    </LayoutUser>
  );
}

export { Categories };

