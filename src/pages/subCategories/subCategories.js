import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LayoutUser from "../../layout/LayoutUser";
import {
  Grid,
  Box,
  Pagination,
  Typography,
  CircularProgress,
} from "@mui/material";
import image from "../../assets/images/loader-img.gif";
import CardCat from "../../componentes/Card/CardCat";
import Styles from "../../componentes/Category/category.module.css";

import { useFetch } from "../Stack/components/usefetch";

function SubCategories() {
  let parm = useParams();
  let nameSubgroup = parm.Subgroup;
  let idCategory = parm.categoryId;
  console.log(parm);
  const limit = useMemo(() => 3, []);
  const [activePage, setActivePage] = useState(1);
  const { data, loading, error } = useFetch(
    `/products?_page=${activePage}&_limit=${limit}&category=${idCategory}&Subgroup=${nameSubgroup}`
  );
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
          <Grid container justifyContent="center" xs={12}>
            {/* {console.log("d:", data.data.name)} */}
            <Grid item xs={12} sx={{ mt: 3, mb: 6 }}>
              <h3>{nameSubgroup}</h3>
            </Grid>

            {data.data.map((item, id) => (
              <Grid item xs={12} sm={5} md={4} sx={{ mb: 3 }}>
                <NavLink
                  key={id}
                  to={`/Detail/${item.id}`}
                  className={Styles.linkCat}
                >
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

export { SubCategories };
