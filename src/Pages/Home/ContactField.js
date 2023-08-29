import { Box, Typography } from '@mui/material';
import React from 'react';
import bg from '../../assets/images/appointment.png'
import Contact from '../Contact/Contact';

const ContactField = () => {
    return (
        <Box sx={{ backgroundImage: `url(${bg})` }} p={8} >
            <Box display={'flex'} justifyContent={'center'}>
                <Box>
                    <Typography textAlign={'center'} color={'secondary'} fontWeight={'bolder'} variant='h6' gutterBottom>Contact Us</Typography>
                    <Typography textAlign={'center'} color={'white'} variant='h4' gutterBottom>Stay connected with us</Typography>
                    <Contact></Contact>
                </Box>
            </Box>

        </Box>
    );
};

export default ContactField;