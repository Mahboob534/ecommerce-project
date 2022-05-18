import React from 'react'
import HeaderUser from './Header/HeaderUser'
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'
import Grid from '@mui/material/Grid';

export default function LayoutUser({children}) {
  return (
  <>
<Grid container >
  <Grid item xs={12}>
  <HeaderUser/>
  </Grid>
  <Grid item xs={3}>
  <SideBar/>
  </Grid>
  <Grid item xs={8}>
  {children}
  </Grid>
  <Grid item xs={12}>
  <Footer/>
  </Grid>
</Grid>


  
   
    
   
  </>
   
  )
}
