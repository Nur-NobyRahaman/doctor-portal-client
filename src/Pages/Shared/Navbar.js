import { Menu } from '@mui/icons-material';
import { AppBar, Box, CircularProgress, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Circular, { Linear } from './Loading';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItem = <>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/appointment'}>Appointment</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/review'}>Review</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/about'}>About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/contact'}>Contact Us</NavLink>
        {
            user && <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/dashboard'}>Dashboard</NavLink>
        }
        {
            user ? <NavLink onClick={() => {
                signOut(auth);
                localStorage.removeItem('accessToken')
            }} className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/login'}>Sign Out</NavLink> : <NavLink className={({ isActive }) => isActive ? "navItemActive" : "navItem"} to={'/login'}>Login</NavLink>
        }


    </>
    if (loading) {
        return <Circular></Circular>
    }
    if (error) {
        return <Box sx={{ display: 'flex' }}>
            < Typography>{error?.message}</Typography>
        </Box>
    }
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