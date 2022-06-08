import * as React from "react";
import styled from "styled-components";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,Container,Avatar,Tooltip,MenuItem
  
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../componentes/logo/Logo";
import { PATHS } from "../../config/routes.config";
import {NavLink,Link} from 'react-router-dom'

import {ACCESS_TOKEN} from '../../config/variable.config'
import style from "../../assets/styles/style.css";
import { useDispatch } from "react-redux";
import { setToken} from "../../redux/action/TokenSlice";
import image from '../../assets/images/logout.png'

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};







const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [active, setActive] = React.useState("");


  const dispatch = useDispatch()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
  

    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"  color='inherit' sx={{p:2}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Logo />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }, 
              }}
            >
             
                <MenuItem  onClick={handleCloseNavMenu} >
                <Link  className='link' to={PATHS.PRODUCT} >
                  <Typography textAlign="center">کالا</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link className='link'  to={PATHS.STACK} >
                  <Typography textAlign="center">موجودی و قیمت </Typography></Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                <Link  className='link' to={PATHS.ORDERS} >
                <Typography textAlign="center">سفارش</Typography></Link>
                </MenuItem>
             
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
             
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Logo/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },mr:25}}>
            
              <Button         
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <NavLink  className='link' to={PATHS.PRODUCT} style={({isActive})=>({color:isActive?"#5ab7fd":"#000"})}>کالا</NavLink>
              </Button>
              <Button     
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <NavLink  className='link' to={PATHS.STACK} style={({isActive})=>({color:isActive?"#5ab7fd":"#000"})}>موجودی و قیمت</NavLink>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                <NavLink  className='link' to={PATHS.ORDERS} style={({isActive})=>({color:isActive?"#5ab7fd":'#000'})} >سفارش</NavLink>
              </Button>
              
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={image} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem  onClick={handleCloseNavMenu} >
                <Link  className='link' to={PATHS.PRODUCT} >
                  <Typography textAlign="center">کالا</Typography></Link>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                <Link   className='link' to={PATHS.STACK} >
                  <Typography textAlign="center">موجودی و قیمت </Typography></Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                <Link   className='link' to={PATHS.ORDERS} >
                <Typography textAlign="center">سفارش</Typography></Link>
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu} >
                <Link   className='link' to={PATHS.HOME} >
                <Typography textAlign="center" onClick={()=>{
                     dispatch(setToken(null))
                     localStorage.removeItem(ACCESS_TOKEN)
                }
                }>خروج</Typography></Link>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
