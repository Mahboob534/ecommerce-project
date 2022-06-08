import React from "react";
import HeaderAdmin from "./Header/HeaderAdmin";
import Footer from "./Footer/Footer";
import Grid from '@mui/material/Grid';
const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <HeaderAdmin />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};
export default LayoutAdmin;
