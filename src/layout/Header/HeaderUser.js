import React, { useState, useEffect, useMemo } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {Box,Grid} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Logo from "../../componentes/logo/Logo";
import ModalSearch from '../../componentes/Modal/ModalSearch'
import { PATHS } from "../../config/routes.config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import user from "../../assets/images/user.svg";
import { IoMdCart } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import gatAllProduct from "../../api/getAll/getAllproduct";
import useDebounce from "../../componentes/Debounce/Debounce";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 8, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Div =styled("div")`
position: absolute;
top:50;
margin-right:50px
margin-top:5px;
width: 280px;
height: 200px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
overflow: hidden;
overflow-y: auto;
`;
const Image=styled("img")`
height:40px;
width:30px;
`;
 


export default function Header() {
  const checkLog = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart.cartItems);
  let productCount = cart.length;

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 1000);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const products = await gatAllProduct();
      setProducts(products.data);
    } catch (error) {
      alert("loading");
    }
  }

  const product = useMemo(() => {
    if (!search) return -1 ;

    return products.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
    });
  }, [debouncedSearchTerm, products]);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const clearInput = () => {
    setSearch([]);
  };

//console.log('produc', product);



  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>مدیریت</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={productCount} color="error">
            <IoMdCart style={{ fontSize: "2rem" }} />
            <p style={{ fontSize: "1rem" }}>
              <Link className="link" to={PATHS.CART} onClose={handleMenuClose}>
                سبد خرید
              </Link>{" "}
            </p>
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem onClose={handleMenuClose}>
        <IconButton
          size="large"
    
          color="inherit"
        >
          <SearchIcon />
        </IconButton>
        <ModalSearch products={products}/>
      
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <p>
          {" "}
          <Link className="link" to={checkLog ? PATHS.DASHBOARD : PATHS.LOGIN}>
            {" "}
            مدیریت
          </Link>
        </p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#ce93d" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#81c784", color: "#fff" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <Logo />
          </Typography>
         
          <Search
            sx={{
              mr: 20,
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              position:'relative'
            }}
          > 
          <SearchIconWrapper>
              {search.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </SearchIconWrapper>
            <Grid sx={{position:'relative'}} >
            <StyledInputBase
              placeholder="جست و جو ..."
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {product.length >= 0 
            ? (
            <Div > 
                 {product.map((val, key) => (
                <>
                <Image src={`http://localhost:3002/files/${val.thumbnail}`}></Image> 
               <Link to={`/Detail/${val.id}`}>{val.name}</Link><br/>
               </>
              ))
              }
              </Div>)
            : (<span></span>)}
 </Grid>
          </Search>
 {/* <img src={`http://localhost:3002/files/${val.thumbnail}`} styles={{width:'10px',height:'15px'}}/> */}
 
 
          

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={productCount} color="error">
                <Link className="link" to={PATHS.CART}>
                  <TiShoppingCart style={{ fontSize: "2rem" }} />
                </Link>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <p>
                <Link
                  className="link"
                  to={checkLog ? PATHS.DASHBOARD : PATHS.LOGIN}
                >
                  {" "}
                  <FaUser style={{ fontSize: "2rem" }} />
                </Link>{" "}
              </p>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
