import { Box, Card, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import AppButton from '../../../Component/AppButton/AppButton';

const DentalCare = () => {
    return (
        <Box  display={'flex'} justifyContent={'center'}>
            <CssBaseline></CssBaseline>
            <Box display={'flex'} justifyContent={'center'} gap={10} alignItems={'center'} mt={10} >
                <Box display={'flex'} justifyContent={'center'} >
                    <img style={{ width:'80%', borderRadius: '10px', }} src={treatment} alt="" />
                </Box>
                <Box>
                    <Box width={'42vw'}  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }} >
                        <Typography variant='h2' fontWeight={'bold'} gutterBottom>Exceptional Dental Care, on Your Terms</Typography>
                        <Typography >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>

                    </Box>
                    <AppButton sx={{mt:2.5}} size={'large'} title={'Get Started'}></AppButton>
                </Box>


            </Box>
        </Box>
    );
};

export default DentalCare;