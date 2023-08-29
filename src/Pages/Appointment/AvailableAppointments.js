import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ value }) => {
    const [services, setServices] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [treatment, setTreatment] = useState('')

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <Box mt={5}>
            <Typography textAlign={'center'} color={'secondary'} variant='h5'>Available Services on {dayjs(value).format('MMMM DD, YYYY')}</Typography>
            <Box display={'flex'} justifyContent={'center'} flexWrap={"wrap"} gap={5} mt={10}>
                {
                    services?.map((data, index, arr) => <Service key={data?._id} setOpen={setOpen} setTreatment={setTreatment} services={data}></Service>)
                }
            </Box>
            {
                open && <BookingModal open={open} setOpen={setOpen} treatment={treatment}></BookingModal>
            }
        </Box>
    );
};

export default AvailableAppointments;