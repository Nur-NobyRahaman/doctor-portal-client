import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';

const Dashboard = () => {
    return (
        <Box height={'92dvh'}>
            <Stack direction={'row'}>
                <Box flex={.5}>
                    <Sidebar></Sidebar>
                </Box>
                <Box flex={2.5} bgcolor={'#F1F5F9'} height={'92dvh'} overflow={'auto'}>
                    <Box p={3} display={'flex'} flexDirection={'column'}>
                        <Typography color={'#ab47bc'} textAlign={'center'} fontWeight={'bold'} variant='h4' component={'span'}>Welcome to your Dashboard</Typography>
                        <Feed></Feed>
                    </Box>

                </Box>
            </Stack>


        </Box>
    );
};

export default Dashboard;