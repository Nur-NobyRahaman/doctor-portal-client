import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';


const TestimonialCard = ({ name, image, review, location }) => {
    return (
        <Box>
            <Card sx={{ width: '25vw', height: '33vh' }}  >
                <CardContent sx={{ p: 8 }}>

                    <Box >
                        <Typography variant='body1'>{review}</Typography>
                    </Box>
                    <Box mt={4} display={'flex'} alignItems={'center'} gap={2}>
                        <img style={{ width: '20%' }} src={image} alt="" />
                        <Box display={'flex'} flexDirection={'column'} >
                            <Typography variant='h6' fontWeight={'bold'}>{name}</Typography>
                            <Typography variant='body1'>{location}</Typography>
                        </Box>
                    </Box>

                </CardContent>

            </Card>
        </Box>
    );
};

export default TestimonialCard;