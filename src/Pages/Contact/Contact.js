import { Box, TextField } from '@mui/material';
import React from 'react';
import AppButton from '../../Component/AppButton/AppButton';

const Contact = () => {
    return (
        <Box width={'40vw'} mt={5}>
            <form action="">
                <TextField color='secondary' sx={{ bgcolor: 'white', borderRadius: 1 }} margin='normal' fullWidth type='email' placeholder='Email'></TextField>
                <TextField color='secondary' sx={{ bgcolor: 'white', borderRadius: 1 }} margin='normal' fullWidth type='text' placeholder='Subject'></TextField>
                <TextField
                    color='secondary'
                    sx={{ bgcolor: 'white', borderRadius: 1 }}
                    margin='normal'
                    fullWidth
                    id="outlined-multiline-static"
                    placeholder="Your Message"
                    multiline
                    rows={4}

                />
                <AppButton sx={{ mt: 1 }} size={'large'} fullWidth >Submit</AppButton>
            </form>
        </Box>
    );
};

export default Contact;