import { Box, Typography } from '@mui/material';
import React from 'react';
import people1 from '../../assets/images/people1.png'
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';
const Testimonial = () => {
    const reviews = [
        {
            name: 'Winson Herry',
            location: 'California',
            image: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }, {
            name: 'Winson Herry',
            location: 'California',
            image: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
        , {
            name: 'Winson Herry',
            location: 'California',
            image: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }

    ]
    return (
        <Box mt={7} p={8}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box>
                    <Typography color={'secondary'} variant='h6' fontWeight={'bold'} gutterBottom>Testimonial</Typography>
                    <Typography variant='h4' gutterBottom>What Our Patients Says</Typography>
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'}>
                    <img style={{width:'70%'}} src={quote} alt="" />
                </Box>

            </Box>
            <Box mt={10} display={'flex'} justifyContent={'space-evenly'}>
                {reviews?.map((data, index) => <TestimonialCard key={index+ Math.floor((Math.random() * 100) + 1)} name={data?.name} image={data?.image} review={data?.review} location={data?.location}></TestimonialCard>)}
            </Box>
        </Box>
    );
};

export default Testimonial;