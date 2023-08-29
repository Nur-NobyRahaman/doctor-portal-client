import { Box, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../assets/images/doctor.png'
import treatment from '../../assets/images/treatment.png'
import AppButton from '../../Component/AppButton/AppButton';


const MakeAppointment = () => {
    return (

        <Box className='appointment' display={'flex'} justifyContent={'center'} alignItems={'center'} mt={17} >
            <Box display={'flex'} justifyContent={'center'} width={'40vw'}>
                <img style={{ width: '70%', marginTop: '-100px', }} src={doctor} alt="" />
            </Box>
            <Box >
                <Box width={'42vw'} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: 1.5 }} >
                    <Typography color={'secondary'} variant='h6' fontWeight={'bold'} gutterBottom>Appointment</Typography>
                    <Typography color={'white'} variant='h3' fontWeight={'bold'} gutterBottom>Make an appointment Today</Typography>
                    <Typography color={'white'}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</Typography>

                </Box>
                <AppButton sx={{ mt: 2.5 }} size={'large'} >get started</AppButton>
            </Box>


        </Box>
    );
};

export default MakeAppointment;