import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState,useEffect } from "react";
import { NavLink,useNavigate } from "react-router";
import {SignIn, SignOut }  from '../../APP/features/User/UserSlice';
import UserManage from '../../Config/UserManage';
import  {useDispatch } from 'react-redux'

const Auth = UserManage(); // Call the function to get auth functions

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   useEffect(() => {
          Auth.getLoggedInUser().then((user) => {
            if (!user) {
              dispatch(SignOut())
              navigate("/Signup");
            } else {
               dispatch(SignIn({ Email: user.email, Password: user.password, Name: user.name, User: user }));
          }});
        }, [])

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky" sx={{ background: "#1976d2" ,zIndex:9}}>
    <Toolbar>
      {/* Logo or Brand Name */}
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My Website
      </Typography>

      {/* Desktop Links (Hidden on Mobile) */}
      <NavLink to= '/' style={{textDecoration:'none',color:'white'}}>
          <Button  color="inherit" sx={{ display: { xs: "none", md: "block" } }}>Home</Button>
      </NavLink>
      <NavLink to= '/about' style={{textDecoration:'none',color:'white'}}>
          <Button  color="inherit" sx={{ display: { xs: "none", md: "block" } }}>About</Button>
      </NavLink>
      <NavLink to= '/contact' style={{textDecoration:'none',color:'white'}}>
          <Button  color="inherit" sx={{ display: { xs: "none", md: "block" } }}>Contact</Button>
      </NavLink>
      <NavLink to= '/logout' style={{textDecoration:'none',color:'white'}}>
          <Button  color="inherit" sx={{ display: { xs: "none", md: "block" } }}>Signout</Button>
      </NavLink>
      {/* Mobile Menu Icon */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>

      {/* Mobile Menu Items */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <NavLink to= '/' style={{textDecoration:'none',color:'black'}}>
          <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        </NavLink>
        <NavLink to= '/about' style={{textDecoration:'none',color:'black'}}>
          <MenuItem onClick={handleMenuClose}>About</MenuItem>
        </NavLink>
        <NavLink to= '/contact' style={{textDecoration:'none',color:'black'}}>
          <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
        </NavLink>
        <NavLink to= '/logout' style={{textDecoration:'none',color:'black'}}>
          <MenuItem onClick={handleMenuClose}>SignOut</MenuItem>
        </NavLink>
      </Menu>
    </Toolbar>
  </AppBar>
  )
}

export default Header
