import React, { useState, useMemo } from "react";
import CardCat from "../Card/CardCat";
import { Navigate } from "react-router-dom";
import image from "../../assets/images/loader-img.gif";
import { Grid, Box, Pagination, Typography } from "@mui/material";
import { useFetch } from "../../pages/Stack/components/usefetch";

export default function Category(props) {
  let idCategory = props.idCategory;
  let Subgroup = props.Subgroup;

  const limit = useMemo(() => 4, []);
  const [activePage, setActivePage] = useState(1);

  const { data, loading, error } = useFetch(
    Subgroup == ""
      ? `/products?_start=4&_end=10&category=${idCategory}`
      : `/products?_start=0&_end=3&_page=${activePage}&_limit=${limit}&Subgroup=${Subgroup}&category=${idCategory}`
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
        <Grid container justifyContent="center" sx={{ my: 1 }}>
          {data ? (
            data.data.map((item) => (
              <Grid item xs={12} sm={5} md={5} lg={3} mx={{xs:0,sm:1,md:2}} sx={{my:2}} minWidth={{xs:0,sm:'270px',md:'300px'}}>
                <CardCat item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <Navigate to="/" />
          )}
        </Grid>
      )}

      {Subgroup != "" ? (
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
      ) : (
        ""
      )}
    </Box>
  );
}
