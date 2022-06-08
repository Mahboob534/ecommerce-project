import React from 'react'
import HeaderUser from './Header/HeaderUser'
import SideBar from './SideBar/SideBar'
import Footer from './Footer/Footer'
import Grid from '@mui/material/Grid';
import Header from '../layout/Header/header'
export default function LayoutUser({children}) {
  return (
  <>
<Grid container >
  <Grid item xs={12}>
  <HeaderUser/> 
  <Header/>
  </Grid>
  <Grid item sx={{display:{xs:'none',md:'flex'}}}>
   <SideBar/>
  </Grid>
  <Grid item xs={12} md={9} lg={10}>
  {children}
  </Grid>
  <Grid item xs={12}>
  <Footer/>
  </Grid>
</Grid>


  
   
    
   
  </>
   
  )
}
