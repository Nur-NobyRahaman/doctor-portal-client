import React from 'react';
import ServicesCard from './ServicesCard';
import { Box, CssBaseline, Stack, Typography } from '@mui/material';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import DentalCare from './Dental/DentalCare';

const Services = () => {
    return (
        <Box mt={8}>
            <CssBaseline></CssBaseline>
            <Typography textAlign={'center'} variant='h6' color={'secondary'} gutterBottom> OUR SERVICES</Typography>
            <Typography textAlign={'center'} variant='h5'> Services We Provide</Typography>
            <Stack direction="row" spacing={2} justifyContent={'space-evenly'} mt={5} mb={10}>
                <ServicesCard img={fluoride} color={'white'} bg={'linear-gradient(90deg, #19D3AE, #0FCFEC)'} title={"Visit our location"}></ServicesCard>
                <ServicesCard img={cavity} color={'white'} bg={'linear-gradient(90deg, #19D3AE, #0FCFEC)'} title={"Visit our location"}></ServicesCard>
                <ServicesCard img={whitening} color={'white'} bg={'linear-gradient(90deg, #19D3AE, #0FCFEC)'} title={"Visit our location"}></ServicesCard>
            </Stack>
            <DentalCare></DentalCare>

        </Box>
    );
};

export default Services;