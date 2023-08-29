import { CancelRounded, CloseRounded } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';

const BookingModal = ({ open, setOpen, treatment }) => {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} id="alert-dialog-title">
                    <Typography color={'secondary'}  variant='h6'>Booking for: {treatment?.name}</Typography>
                    <IconButton onClick={handleClose}
                        sx={{ bgcolor: '#3A4256', "&:hover": { bgcolor: 'lightgray' } }}>

                        <CloseRounded color='fourthly' sx={{ "&:hover": { color: '#3A4256' } }}></CloseRounded>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form action="">
                            <TextField fullWidth margin='normal' color='secondary' size='small' label='Date' />
                            <TextField fullWidth margin='normal' color='secondary' size='small' label='Slots' />
                            <TextField fullWidth margin='normal' color='secondary' size='small' label='Full Name' />
                            <TextField fullWidth margin='normal' color='secondary' size='small' label='Phone Number' />
                            <TextField fullWidth margin='normal' color='secondary' size='small' label='Email' />
                            <Button fullWidth size='large' variant='contained' color='thirdly'>submit</Button>
                        </form>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </Box>
    );
};

export default BookingModal;