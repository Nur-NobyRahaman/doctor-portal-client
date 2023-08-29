import { Box, Paper } from '@mui/material';
import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import dayjs from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const AppointmentBanner = ({value, setValue}) => {
  
    return (
        <Box sx={{ backgroundImage: `url(${bg})` }}>
            <Box display={'flex'} justifyContent={'center'} pt={25} pb={25} gap={15}>
                <Box width={'50vw'} display={'flex'} justifyContent={'end'}>
                    <Paper sx={{width:'fit-content'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                        </LocalizationProvider>
                    </Paper>

                </Box>
                <Box   width={'50vw'}  display={'flex'} justifyContent={'start'}>
                    <img style={{ width: '60%' }} src={chair} alt="" />
                </Box>
            </Box>
            
        </Box>
    );
};

export default AppointmentBanner;