import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Box, 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EditIcon from '@mui/icons-material/Edit';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";
function Aside() {
  const [open, setOpen] = useState(false); // State for controlling sidebar
  const navigate =  useNavigate();
  const selector =  useSelector((state => state.User));
  // Function to toggle the drawer open/close
  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(isOpen);
  };
  return (
    <>
      {/* Menu Button to Toggle Sidebar */}
      <IconButton onClick={toggleDrawer(true)} sx={{ position: "absolute", top: 10, left: 10,zIndex:1111 }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            <ListItem button onClick = {() => navigate('/')}>
              <ListItemIcon><AutoStoriesIcon /></ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button onClick = {() => navigate(`/blog/edit/${selector.User.$id}`)}>
              <ListItemIcon><EditIcon /></ListItemIcon>
              <ListItemText primary="My Blog" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MessageIcon /></ListItemIcon>
              <ListItemText primary="Message" />
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
      </> 
  )
}

export default Aside
