import React,{useState,useEffect} from 'react'
import {Grid} from '@mui/material'
import ModalProduct from '../../componentes/Modal/ModalProduct'
import { useSelector} from 'react-redux';
import axios from 'axios';
import Table from './components/Tabel/Table'



export default function ProductInfo(){
   const [row,setRow]=useState([])
   const [rowCat,setRowCat]=useState([])

   useEffect(() => {
    axios.get("http://localhost:3002/products").then((res) => setRow(res.data));
    axios.get("http://localhost:3002/category").then((res)=> setRowCat(res.data) )
  }, []);
  
   console.log(rowCat);
      return (
      
        <Grid container spacing={2} sx={{m:5}}>
        <Grid item xs={6} md={4} sx={{mr:30}} >
          <h1 >مدیریت کالاها</h1>
        </Grid>
        <Grid item xs={6} md={4}>
        
             <ModalProduct hand/>
         
        </Grid>
        <Grid item xs={12} md={8}>
               <Table row={row} rowCat={rowCat}/> 
        </Grid>
        
      </Grid>
     
         
     
    
    
  )
}

export {ProductInfo}