import { Button, CircularProgress, Typography } from '@mui/material';
import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Circular from '../Shared/Loading';

const CheckoutForm = ({ treatment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState()
    const [processing, setProcessing] = useState(false)

    const { _id, price, displayName, email } = treatment;
    console.log(treatment);



    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)
                }
            })


    }, [price])

    if (processing) {
        return <CircularProgress></CircularProgress>
    }

    console.log(errorMessage);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || elements == null) {
            return;
        }


        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setErrorMessage(error?.message)
            console.log('[error]', error);
            setSuccess('')
            // setSuccessPayment(false)
        } else {
            setErrorMessage('')
            setSuccess('')
            setProcessing(true)
            // setSuccessPayment(false)
            console.log('[PaymentMethod]', paymentMethod);
        }

        // confirm 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setErrorMessage(intentError?.message)
            setSuccess('')
            // setSuccessPayment(false)
            setProcessing(false)
        }
        else {
            setErrorMessage('')
            console.log(paymentIntent);
            // setSuccessPayment(true)
            setTransactionId(paymentIntent?.id)
            // setTrans(paymentIntent?.id)
            setSuccess('Congrats! Your payment is completed.')
            const payment = {
                appointment: _id,
                transactionId: paymentIntent?.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: "PATCH", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);

                })
        }

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Typography sx={{ color: 'red', mt: 1, mb: 1 }}>{errorMessage}</Typography>
                <Typography sx={{ color: 'green', mt: 1, mb: 1 }}>{success}</Typography>
                <Typography sx={{ color: 'green', mt: 1, mb: 1 }}>{success && 'Your TransactionId :' + transactionId}</Typography>
                <Button sx={{ mt: 1 }} fullWidth color='success' variant='contained' type="submit" disabled={!stripe || !clientSecret}>
                    Payment
                </Button>
            </form>
        </div>
    );
};

export default CheckoutForm;