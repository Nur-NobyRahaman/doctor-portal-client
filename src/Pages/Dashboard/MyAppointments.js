import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Circular from '../Shared/Loading';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {

            fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            }).then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                return res.json()
            }).then(data => {
                setAppointment(data)
            })
        }
    }, [user])
    if (loading) {
        return <Circular></Circular>
    }
    console.log(appointment, user);
    return (
        <Box mt={5}>

            <Paper sx={{ width: '70%', overflow: 'hidden', mx: 'auto' }}>
                <TableContainer sx={{ maxHeight: '65dvh' }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead >
                            <TableRow >
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">No</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Name</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Date</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Time</TableCell>
                                <TableCell sx={{ bgcolor: '#E6E6E6', color: 'black', textTransform: 'uppercase' }} align="left">Treatment</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {appointment.map((row, index) => (
                                <TableRow
                                    key={index + Math.random()}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left" component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="left">{row.displayName}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">{row.slot}</TableCell>
                                    <TableCell align="left">{row.name}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>
        </Box>
    );
};

export default MyAppointments;