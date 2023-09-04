import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import AppButton from '../../Component/AppButton/AppButton';

const Service = ({ services, setTreatment, setOpen }) => {
    const { name, slots } = services
    return (
        <Box>
            <Paper elevation={3} sx={{ width: '25vw', height: '25vh', p: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", gap: .5 }}>
                <Typography color={'secondary'} variant='h5' gutterBottom>{name}</Typography>
                <Typography variant='body2' gutterBottom>{
                    slots.length ? <span>{slots[0]}</span> : <Typography color={'error'} >Try another date</Typography>
                }</Typography>
                <Typography textTransform={'uppercase'} variant='body2' gutterBottom>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} are Available</Typography>
                <AppButton onClick={() => { setOpen(true); setTreatment(services) }} disabled={slots.length === 0} size={'large'}>book appointment</AppButton>
                
            </Paper>

        </Box>
    );
};

export default Service;