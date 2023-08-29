import { Box, Card, CardMedia, CssBaseline, Typography } from '@mui/material';
import React from 'react';

const InfoCard = ({ img, color, bg ,title,}) => {
    return (
        <Box >
            <CssBaseline></CssBaseline>
            <Card variant='outlined' sx={{ width: '25vw',height:'20vh', display: 'flex',gap:2, background: bg, color: color, pl: 2, pr: 2, pt: 4, pb: 4, }} >
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                   
                    <img src={img} alt="" />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h6' gutterBottom>{title}</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default InfoCard;