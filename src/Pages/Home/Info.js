import { Box,  Stack } from '@mui/material';
import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'


import InfoCard from './InfoCard';

const Info = () => {
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent={'space-evenly'} >
                <InfoCard img={clock} color={'white'} bg={'linear-gradient(90deg, #19D3AE, #0FCFEC)'} title={"Visit our location"}></InfoCard>
                <InfoCard img={location} color={'white'} bg={'#3A4256'} title={"Visit our location"}></InfoCard>
                <InfoCard img={phone} color={'white'} bg={'linear-gradient(90deg, #19D3AE, #0FCFEC)'} title={"Contact us now"}></InfoCard>
            </Stack>

        </Box>
    );
};

export default Info;