import React from 'react';
import { useQuery } from 'react-query';
import Circular from '../Shared/Loading';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
    const navigate = useNavigate()
    const { data: users, isLoading, error, refetch } = useQuery('users', () => fetch('https://doctors-portal-server-one-snowy.vercel.app/users', {
        method: 'GET',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    if (isLoading) {
        return <Circular />
    }
    if (error) {
        return <p>{error.message}</p>
    }
    if (users?.message) {
        return navigate('/')
    }

    const handleMakeAdmin = (user) => {
        const { email } = user;
        fetch(`https://doctors-portal-server-one-snowy.vercel.app/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    enqueueSnackbar(`Field to make admin`, { variant: 'error', autoHideDuration: 2000, preventDuplicate: true })
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data?.data?.modifiedCount > 0) {
                    refetch()
                    enqueueSnackbar(`${data?.status}`, { variant: data?.color, autoHideDuration: 2000, preventDuplicate: true })

                }
            })


    }
    console.log(users);
    return (
        <Box>

            <Paper sx={{ width: '70%', overflow: 'hidden', mx: 'auto' }}>
                <TableContainer sx={{ maxHeight: '65dvh' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">No</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Email</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Make Admin</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Remove User</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row, index) => (
                                <TableRow
                                    key={index + Math.random()}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left" component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row?.role === 'admin' ? "Already Admin" : <Button onClick={() => handleMakeAdmin(row)} variant='contained' size='small' color='secondary' >Make admin</Button>}</TableCell>
                                    <TableCell align="left"><Button variant='contained' size='small' color='error' >Delete user</Button></TableCell>

                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </Box>
    );
};

export default AllUsers;