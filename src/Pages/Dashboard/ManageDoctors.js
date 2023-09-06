import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Circular from '../Shared/Loading';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteDialog from '../DeleteDialog/DeleteDialog';
import { useSnackbar } from 'notistack';

const ManageDoctors = () => {
    const [doctorEmail, setDoctorEmail] = useState('')
    const [open, setOpen] = React.useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const { data, isLoading, error, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )
    if (isLoading) {
        return <Circular />
    }
    const handleDelete = () => {
        console.log('click');
        fetch(`http://localhost:5000/doctor/${doctorEmail}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                setOpen(false)
                if (data?.data?.deletedCount > 0) {
                    enqueueSnackbar(`${data?.status}`, { variant: 'success', autoHideDuration: 2000, preventDuplicate: true })
                }
                else {
                    enqueueSnackbar(`Failed to delete`, { variant: 'error', autoHideDuration: 2000, preventDuplicate: true })
                }
                console.log(data)
            })
    };

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Box mt={7}>

            <Paper sx={{ width: '60%', overflow: 'hidden', mx: 'auto' }}>
                <TableContainer sx={{ maxHeight: '65dvh' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">No</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Avatar</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Name</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Email</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Specialty</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((row, index) => (
                                <TableRow
                                    key={index + Math.random()}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left" component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left"><Avatar alt={row.name} src={row?.img} /></TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.specialty}</TableCell>
                                    <TableCell align="left"><Button variant='contained' size='small' color='error' onClick={() => {
                                        setOpen(true);
                                        setDoctorEmail(row?.email)
                                    }}>Delete </Button></TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
            <DeleteDialog open={open} handleClose={handleClose} handleDelete={handleDelete}></DeleteDialog>
        </Box>
    );
};

export default ManageDoctors;