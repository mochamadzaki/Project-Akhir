import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import Dropdown from "./Dropdown";
import {NavDropdown,NavItem, DropdownItem} from 'reactstrap'



const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "right",position:'right'}}>
      <Typography
        color={"White"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}>
       Smk Budaya Bangsa
      </Typography>
      <Divider />
      
      <ul className="mobile-navigation">
      <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                
                <li class="dropdown">
      <a href="#">Profile</a>
      <ul class="dropdown-content">
        <li><a href="Sejarah">Sejarah Singkat</a></li>
        <li><a href="visimisi">Visi Misi</a></li>
        <li><a href="Struktur">Struktur Organisasi</a></li>
        <li><a href="Programsekolah">Program Sekolah</a></li>
      </ul>
    </li>
              <li>
                  <NavLink to={"/ProgramStudi"}>Program Studi</NavLink>
                </li>
                <li>
                  <NavLink to={"/Artikel"}>Artikel</NavLink>
                </li>
                <li>
                  <NavLink to={"/Ekstrakulikuler"}>Ekstrakulikuler</NavLink>
                </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{backgroundColor: '#032A3B', alignContent:'center' }}>
          <Toolbar>
          <img src='skolah.png' alt='/' height={70} width={60}/>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon/>
            </IconButton>
            <Typography
              color={"White"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            Smk Budaya Bangsa
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                
                
                <li class="dropdown">
      <a href="#">Profile</a>
      <ul class="dropdown-content">
        <li><a href="Sejarah">Sejarah Singkat</a></li>
        <li><a href="visimisi">Visi Misi</a></li>
        <li><a href="Struktur">Struktur Organisasi</a></li>
        <li><a href="Programsekolah">Program Sekolah</a></li>
      </ul>
    </li>
        
                <li class="dropdown">
      <a href="#">Program Studi</a>
      <ul class="dropdown-content">
        <li><a href="RPL">Rekayasa Perangkat Lunak</a></li>
        <li><a href="TBSM">Teknik Bisnis dan Sepeda Motor</a></li>
      </ul>
    </li>
                <li>
                  <NavLink to={"/Artikel"}>Artikel</NavLink>
                </li>
                <li class="dropdown">
      <a href="#">Ekstrakulikuler</a>
      <ul class="dropdown-content">
        <li><a href="Pramuka">Pramuka</a></li>
        <li><a href="Futsal">Futsal</a></li>
        <li><a href="Sispala">Sispala</a></li>
        <li><a href="Aslab">Aslab</a></li>
      </ul>
    </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",alignContent:'right',
                alignItems:'right'
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
