import { Box } from '@mui/material';
import React from 'react';
import Footer from '../Home/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';
import dayjs from 'dayjs';

const Appointment = () => {
    const [value, setValue] = React.useState(dayjs(new Date()));
    return (
        <Box position={'relative'}>
            <AppointmentBanner value={value} setValue={setValue}></AppointmentBanner>
            <AvailableAppointments value={value}></AvailableAppointments>
            <Footer></Footer>
        </Box>
    );
};

export default Appointment;