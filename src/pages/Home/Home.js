import React,{useState,useEffect} from 'react'
import Styles from './home.module.css'
import LayoutUser from '../../layout/LayoutUser'
import Category from '../../componentes/Category/Category'
import {Link,Navigate, Outlat} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import getAllCategory from '../../api/getAll/getAllCategory'
import { PATHS} from  '../../config/routes.config'
import { useDispatch } from "react-redux";
import {setCategory} from '../../redux/action/CategorySlice'
import Categories from '../Categories/Categories'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 function Home() {


  const [rowCat, setRowCat] = useState([]);
  const dispatch=useDispatch()
  useEffect(() => {
    
    getData();
  }, []);
  async function getData() {
    try {
      const category = await getAllCategory()
        setRowCat(category.data);
    } catch (error) {
     alert("loading");
    }
  }
console.log(rowCat);
  return (
    <LayoutUser >
      <ToastContainer/>
     <Grid container  justifyContent="right" sx={{m:2}} >
      
       {rowCat ? rowCat.map((item ,id) => (
              <Grid sx={{border:1,borderColor:"grey.400", p:2,borderRadius:5,m:2 }}>
                 <Link  to={`/Categories/${item.id}`} className={Styles.titleCat}  id={item.id} onClick={()=>dispatch(setCategory(item.id))}>
                   <h3 key={id}> {item.name}</h3>
                  
                 </Link> 
                 
                 <Category idCategory={item.id} key={id} />
                  </Grid>
                 ))
              
                 : <Navigate to='/'/>
            }


      
    
            
    </Grid>
    
    </LayoutUser>
  )
}
export {Home}