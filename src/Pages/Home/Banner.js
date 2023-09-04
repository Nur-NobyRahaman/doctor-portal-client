import { Box } from '@mui/system';
import React from 'react';
import chair from '../../assets/images/chair.png'
import './Banner.css'
import { CssBaseline, Stack, Typography } from '@mui/material';
import AppButton from '../../Component/AppButton/AppButton';
const Banner = () => {
    return (
        <Box className='banner' pb={30}>
            <CssBaseline></CssBaseline>
            <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'center'} width={'100vw'} pt={15} pl={30} pr={30}>
                <Box width={'50vw'}>
                    <Typography variant='h4' fontWeight={'bolder'} gutterBottom>Your New Smile Starts Here</Typography>
                    <Typography variant='body2' gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Typography>

                    <AppButton title={'Get Started'}></AppButton>
                </Box>
                <Box width={'50vw'} display={'flex'} justifyContent={'center'}>
                    <img style={{ width: '80%', height: "50%" }} src={chair} alt="" />
                </Box>

            </Stack>
        </Box>
    );
};

export default Banner;