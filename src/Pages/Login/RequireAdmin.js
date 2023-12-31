import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { Box, LinearProgress, Typography } from '@mui/material';
import { Linear } from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading]=useAdmin(user)
    let location = useLocation();
    if (loading || adminLoading) {
        return <Linear />
    }
    if (error) {
        return <Box><Typography>{error?.message}</Typography></Box>
    }
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmin;