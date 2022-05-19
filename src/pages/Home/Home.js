import React,{useState,useEffect} from 'react'
import Styles from './home.module.css'
import LayoutUser from '../../layout/LayoutUser'
import Category from '../../componentes/Category/Category'
import {NavLink,Navigate} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import { PATHS} from  '../../config/routes.config'
import { useDispatch } from "react-redux";
import {setCategory} from '../../redux/action/CategorySlice'
 function Home() {
  const [rowCat, setRowCat] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    
    getData();
  }, []);
  async function getData() {
    try {
      const category = await axios.get("http://localhost:3002/category");
        setRowCat(category.data);
    } catch (error) {
     alert("loading");
    }
  }

  return (
    <LayoutUser >
     <Grid container  justifyContent="right" >
    { rowCat ? rowCat.map((item ,id) => (
              <>
                <NavLink  to={PATHS.CATEGORIES} className={Styles.titleCat} onClick={()=>dispatch(setCategory(item.id))}>
                   <h3 key={id}> {item.name}</h3>
                 </NavLink>
                 <Category idCategory={item.id} key={id} /></>
                 ))
              
              : <Navigate to='/'/>
            }
    </Grid>
    
    </LayoutUser>
  )
}
export {Home}