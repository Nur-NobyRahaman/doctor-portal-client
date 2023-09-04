import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query'
import Circular, { Linear } from '../Shared/Loading';



const AvailableAppointments = ({ value }) => {
    // const [services, setServices] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [treatment, setTreatment] = useState('')
    const date = dayjs(value).format('MMMM DD, YYYY');

    const { isLoading, error, data: services ,refetch } = useQuery(['available',date,], () =>
    fetch(`https://doctors-portal-server-one-snowy.vercel.app/available?date=${date}`).then(res =>
      res.json()
    )
  )

    console.log(services);
    if (isLoading) {
        return <Circular></Circular>
    }
    if(error){
        return <p>{error?.message}</p>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${date}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.data?.length) {
    //                 setLoading(false)
    //                 setServices(data?.data)
    //             }
    //         })
    // }, [date]);

    return (
        <Box mt={5}>
            <Typography textAlign={'center'} color={'secondary'} variant='h5'>Available Services on {dayjs(value).format('MMMM DD, YYYY')}</Typography>
            <Box display={'flex'} justifyContent={'center'} flexWrap={"wrap"} gap={5} mt={10}>
                {
                        services?.data?.map((data, index, arr) => <Service key={data?._id + Math.random()} setOpen={setOpen} setTreatment={setTreatment} services={data}></Service>)
                }
            </Box>
            {
                open && <BookingModal refetch={refetch} open={open} date={value} setOpen={setOpen} treatment={treatment}></BookingModal>
            }
        </Box>
    );
};

export default AvailableAppointments;