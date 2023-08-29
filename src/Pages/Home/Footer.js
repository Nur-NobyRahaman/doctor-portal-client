import { Box, Typography } from '@mui/material';
import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <Box pb={10}  pt={15} sx={{ backgroundImage: `url(${footer})`,objectFit:'cover',}}>
            <Box  display={'flex'} justifyContent={'space-evenly'}>
                <Box>
                    <Typography fontWeight={'bolder'} variant='h6' color={'text.secondary'} gutterBottom>SERVICES</Typography>
                    <Typography variant='body1' gutterBottom>Emergency Checkup</Typography>
                    <Typography variant='body1' gutterBottom>Monthly Checkup</Typography>
                    <Typography variant='body1' gutterBottom>Weekly Checkup</Typography>
                    <Typography variant='body1' gutterBottom>Deep Checkup</Typography>
                </Box>
                <Box>
                    <Typography fontWeight={'bolder'} variant='h6' gutterBottom color={'text.secondary'}>ORAL HEALTH</Typography>
                    <Typography variant='body1' gutterBottom>Fluoride Treatment</Typography>
                    <Typography variant='body1' gutterBottom>Cavity Filling</Typography>
                    <Typography variant='body1' gutterBottom>Teath Whitening</Typography>
                   
                </Box>
                <Box>
                    <Typography fontWeight={'bolder'} variant='h6' gutterBottom color={'text.secondary'}>OUR ADDRESS</Typography>
                    <Typography variant='body1' gutterBottom>New York - 101010 Hudson</Typography>
                  
                </Box>

            </Box>

            <Typography gutterBottom mt={10}  textAlign={'center'} variant='body1' >Copyright {new Date().getFullYear()} All Rights Reserved</Typography>
        </Box>
    );
};

export default Footer;