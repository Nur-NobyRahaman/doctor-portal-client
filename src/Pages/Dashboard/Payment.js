import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Circular from '../Shared/Loading';
import { Box, Paper, Typography } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51NbcPSAyUC0FH7xaAANPoXNwkASRCErTz5m6wCa8HQain9W0yjwni8yCiLyJUbGxNGW83py5RJlTN08QkhRXeqoC00byrQtkvL');
const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
        /*...*/
    },
}

const Payment = () => {
    const { id } = useParams();

    const { data: appointment, isLoading, error } = useQuery(['booking', id], () => fetch(`http://localhost:5000/booking/${id}`, {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Circular></Circular>
    }

    return (
        <Box>
            <Paper sx={{ width: 'fit-content', p: 5 }}>
                <Typography color={'secondary'} gutterBottom>Hello,{appointment?.displayName}</Typography>
                <Typography variant='h6' gutterBottom>Please pay for {appointment?.name}</Typography>
                <Typography gutterBottom>Your Appointment: <Typography variant='span' color={'error'}>{appointment?.date}</Typography> at {appointment?.slot}</Typography>
                <Typography gutterBottom>Please Pay : {appointment?.price}</Typography>
            </Paper>
            <Paper sx={{ width: '28vw', p: 5 }} >

                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm treatment={appointment}/>
                </Elements>
            </Paper>
        </Box>
    );
};

export default Payment;