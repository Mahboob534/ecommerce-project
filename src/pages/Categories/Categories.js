import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { NavLink, Navigate } from "react-router-dom";
import LayoutUser from "../../layout/LayoutUser";
import {
  Grid,
  Box,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";

import CardCat from "../../componentes/Card/CardCat";
import Styles from "../../componentes/Category/category.module.css";

import { useFetch } from "../Stack/components/usefetch";

function Categories() {
  let params = useParams();
  let idCategory = params.categoryId;

  //console.log(idCategory);

  const limit = useMemo(() => 5, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/products?_page=${activePage}&_limit=${limit}&category=${idCategory}`
  );

  // console.log(select);
  //   const[rows,setRows]=useState([])

  //   useEffect(() => {
  //     getData(select);
  //   }, [select]);

  //   async function getData(select) {
  //     try {
  //       const products = await getOneGroupProducts(select)
  //       setRows(products.data);
  //     } catch (error) {
  //       alert("loading");
  //     }
  //   }

  // console.log('category',params);
  if (error) {
    return (
      <>
        <Typography variant="body1">ERROR - Typography Body1</Typography>
        <Typography variant="body2">ERROR - Typography Body2</Typography>
      </>
    );
  }
  return (
    <LayoutUser>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          marginInline: 2,
          m: 5,
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
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={1} justifyContent="center" sx={{ m: 5 }}>
            {data.data.map((item) => (
              <Grid item xs={4}>
                <NavLink to={`/Detail/${item.id}`} className={Styles.linkCat}>
                  <CardCat item={item} key={item.id} />
                </NavLink>
              </Grid>
            ))}
          </Grid>
        )}

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
