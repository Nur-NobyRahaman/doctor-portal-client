import { Box, ListItemButton } from '@mui/material';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Circular from '../Shared/Loading';

const Sidebar = () => {
    const location = useLocation()
    const [user, loading] = useAuthState(auth)
    const [admin] = useAdmin(user);
    if (loading) {
        return <Circular />
    }
    const sidebarItems = <>

        <NavLink className={location?.pathname === '/dashboard' ? "sidebarActive" : "sidebar"} to={'/dashboard'}>
            <ListItemButton>My Appointment</ListItemButton>
        </NavLink>
        <NavLink className={location?.pathname === '/dashboard/review' ? "sidebarActive" : "sidebar"} to={'/dashboard/review'}>
            <ListItemButton>My Review</ListItemButton>
        </NavLink>
        <NavLink className={location?.pathname === '/dashboard/history' ? "sidebarActive" : "sidebar"} to={'/dashboard/history'}>
            <ListItemButton>My History</ListItemButton>
        </NavLink>
        {
            admin && <>
                <NavLink className={location?.pathname === '/dashboard/allUsers' ? "sidebarActive" : "sidebar"} to={'/dashboard/allUsers'}>
                    <ListItemButton>All Users</ListItemButton>
                </NavLink>
                <NavLink className={location?.pathname === '/dashboard/addDoctor' ? "sidebarActive" : "sidebar"} to={'/dashboard/addDoctor'}>
                    <ListItemButton>Add a doctor</ListItemButton>
                </NavLink>
                <NavLink className={location?.pathname === '/dashboard/manageDoctor' ? "sidebarActive" : "sidebar"} to={'/dashboard/manageDoctor'}>
                    <ListItemButton>Manage Doctors</ListItemButton>
                </NavLink>
            </>
        }

    </>
    return (
        <Box>
            <ul style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', listStyleType: 'none', textTransform: 'capitalize' }}>
                {sidebarItems}
            </ul>
        </Box>
    );
};

export default Sidebar;