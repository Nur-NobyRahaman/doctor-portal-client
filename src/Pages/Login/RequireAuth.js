import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { Box, LinearProgress, Typography } from '@mui/material';
import { Linear } from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Linear />
    }
    if (error) {
        return <Box><Typography>{error?.message}</Typography></Box>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;