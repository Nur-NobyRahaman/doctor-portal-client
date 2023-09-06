import { CloseRounded } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSnackbar } from 'notistack';

const BookingModal = ({ open, setOpen, treatment, date ,refetch}) => {
    const { name, slots ,price } = treatment
    const [slot, setSlot] = React.useState(slots[0]);
    const [phone, setPhone] = useState(0)
    const [user] = useAuthState(auth);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setOpen(false)
        try {
            const response = await fetch("http://localhost:5000/booking", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    date: dayjs(date).format('MMMM DD, YYYY') ,
                    name,
                    slot,
                    price,
                    displayName: user?.displayName,
                    email: user?.email,
                    phone: phone

                }),
            });

            const result = await response.json();
            console.log("Success:", result);
            enqueueSnackbar(`${result?.status}`, { variant: result?.color, autoHideDuration: 2000, preventDuplicate: true })
            refetch()

        } catch (error) {
            console.error("Error:", error);
        }


    }
    return (
        <Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} id="alert-dialog-title">
                    <Typography component={'span'} color={'secondary'} variant='h6'>Booking for: {name}</Typography>
                    <IconButton onClick={handleClose}
                        sx={{ bgcolor: '#3A4256', "&:hover": { bgcolor: 'lightgray' } }}>

                        <CloseRounded color='fourthly' sx={{ "&:hover": { color: '#3A4256' } }}></CloseRounded>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form action="" onSubmit={handleSubmit}>
                            <TextField fullWidth InputProps={{
                                readOnly: true,
                            }}
                                disabled
                                value={dayjs(date).format('MMMM DD, YYYY') || ''} margin='normal' color='secondary' size='small' />

                            <FormControl margin='normal' color='secondary' size='small' fullWidth>
                                <InputLabel id="demo-simple-select-label">Slots</InputLabel>
                                <Select
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={slot}
                                    label="Slots"
                                    onChange={(event) => setSlot(event.target.value)}
                                >
                                    {slots?.map((data, index) => <MenuItem key={index + Math.random()} value={data}>{data || ''}</MenuItem>)}

                                </Select>
                            </FormControl>
                            <TextField InputProps={{
                                readOnly: true,
                            }} disabled value={user?.displayName || ''} name='fullName' fullWidth margin='normal' color='secondary' size='small' />
                            <TextField disabled value={user?.email || ''} name='email' type='email' fullWidth margin='normal' color='secondary' size='small' />
                            <TextField onChange={(e) => setPhone(e.target.value)} name='phone' type='number' fullWidth margin='normal' color='secondary' size='small' label='Phone Number' />
                            <Button type='submit' fullWidth size='large' variant='contained' color='thirdly'>submit</Button>
                        </form>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </Box>
    );
};

export default BookingModal;