import React,{useState,useEffect} from 'react'
import Styles from './Home.module.css'
import LayoutUser from '../../layout/LayoutUser'
import Category from '../../componentes/Category/Category'
import {Link,Navigate, Outlat} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import getAllCategory from '../../api/getAll/getAllCategory'
import { PATHS} from  '../../config/routes.config'
import { useDispatch } from "react-redux";
import {setCategory} from '../../redux/action/CategorySlice'
import Categories from '../Categories/Categories'
import Carousel from '../../componentes/Carsousel/Carousel'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ShoppingContainer from '../../componentes/ShoppingComtainer/ShoppingContainer'
import { CenterFocusStrong } from '@mui/icons-material'
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
      <Carousel/>
      
     <Grid container  justifyContent="right" >
      
       {rowCat ? rowCat.map((item ,id) => (
              <Grid sx={{border:1,borderColor:"grey.400", p:2,borderRadius:5 ,my:2 }}>
                
                   <Grid xs={12} sx={{backgroundColor:'#27ae60',textAlign:'center',p:1,borderRadius:5}}>
                   <Link  to={`/Categories/${item.id}`} className={Styles.link}  id={item.id} >
                   <h3  key={id}  > {item.name}</h3></Link> 
                   </Grid>
                  
                 
                 
                 <Category idCategory={item.id} Subgroup={""} key={id} />
                  </Grid>
                 ))
              
                 : <Navigate to='/'/>
            }


      
    
            
    </Grid>
    <Grid >
    <ShoppingContainer/>
    </Grid>
   
    </LayoutUser>
  )
}
export {Home}