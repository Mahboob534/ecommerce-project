import React from 'react'
import logo from "../../assets/images/Logo.png"
import Box from '@mui/material/Box'; 
import {Link} from 'react-router-dom'
import {PATHS} from '../../config/routes.config'
import { Home } from '../../pages';
export default function Logo() {
  return (
  <Box component="span" sx={{direction:"rtl"}} >
    <Link  to={PATHS.HOME}><img className="image" src={logo} /></Link>
  </Box>

    
  )
}


