import { Box, Button, Card, CardActions, CardContent, CssBaseline, Typography } from '@mui/material';
import React from 'react';

const ServicesCard = ({ img }) => {
    return (
        <Box >
            <CssBaseline></CssBaseline>

            <Card  sx={{ width: '25vw' ,height:'38vh' }}  >
                <CardContent sx={{ p: 8 }}>
                    <Box display={'flex'} justifyContent={'center'}>
                        <img style={{ width: '40%' }} src={img} alt="" />
                    </Box>
                    <Box mt={3}>
                        <Typography textAlign={'center'} variant='h6' gutterBottom>Fluoride Treatment</Typography>
                        <Typography textAlign={'center'} variant='body2'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</Typography>
                    </Box>


                </CardContent>

            </Card>
        </Box>
    );
};

export default ServicesCard;