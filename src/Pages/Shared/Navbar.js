import { Menu } from '@mui/icons-material';
import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const menuItem = <>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/appointment'}>Appointment</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/review'}>Review</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/contact'}>Contact Us</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/login'}>Login</NavLink>

    </>
    return (
        <Box sx={{ flexGrow: 1 }} mb={9}>
            <CssBaseline />
            <AppBar color='fourthly' sx={{ backgroundColor: 'white', boxShadow: '0px 0px 0px 0px' }} component="nav">
                <Toolbar>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: 'none', mr: 2 }}
                    >

                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Portal
                    </Typography>
                    <Box>
                        <ul style={{ display: 'flex', textDecoration: 'none', listStyleType: 'none', gap: '10px', textTransform: 'capitalize' }}>
                            {menuItem}
                        </ul>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;