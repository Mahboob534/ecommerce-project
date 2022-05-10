import React from "react";

import { Box, TextField, Button, Grid } from "@mui/material";
import {FaSearch} from 'react-icons/fa';
export default function SearchBox() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="center"
        alignItems="center" >
        <Grid item  >
          <TextField id="outlined-basic" placeholder="جستجو" variant="outlined" />
         
        </Grid>
        <Grid item  >
            <Button variant="text"> <FaSearch/></Button>
        </Grid>
      </Grid>
    </Box>
  );
}
