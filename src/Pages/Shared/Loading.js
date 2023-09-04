import { Box, CircularProgress, LinearProgress } from '@mui/material';
import React from 'react';

export default function Circular () {
    return (
        <Box  height={'100dvh'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress color='secondary'/>
        </Box>
        // <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        //     <CircularProgress color='secondary'/>
        // </Box>
    );
};
export  function Linear () {
    return (
        <Box >
            <LinearProgress color='secondary'/>
        </Box>
    );
};



