import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { useQuery } from 'react-query';
import Circular from '../Shared/Loading';
import { useSnackbar } from 'notistack';

const AddDoctor = () => {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    console.log(loading);
    const { data: services, isLoading, error } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))
    if (isLoading || loading) {
        return <Circular />
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const specialty = e.target.specialty.value;
        const formData = new FormData();
        formData.append('image', image);
        setLoading(true)
        const url = "https://api.imgbb.com/1/upload?key=ca481960173778591f456c36631d9744";
        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    const img = data?.data?.url;
                    const doctor = {
                        name: name,
                        email: email,
                        specialty: specialty,
                        img: img
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {

                            setImage(''); setLoading(false);
                            if (result?.data?.insertedId) {
                                enqueueSnackbar(`${result?.status}`, { variant: 'success', autoHideDuration: 2000, preventDuplicate: true })
                            }
                            else {
                                enqueueSnackbar(`Failed to add doctor`, { variant: 'error', autoHideDuration: 2000, preventDuplicate: true })
                            }
                            console.log(result)
                        })
                }
            })
    }

    return (
        <Box mt={8}>
            <Paper sx={{ width: '27dvw', mx: 'auto' }}>
                <Box p={5}>
                    <Typography fontWeight={'bold'} variant='h5' component={'span'}>Add a new doctor</Typography>
                    <form action="" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column", gap: '15px', marginTop: '10px' }}>
                        <TextField name='name' fullWidth size='small' type='text' label='Name' color='secondary'></TextField>
                        <TextField name='email' fullWidth size='small' type='email' label='Email' color='secondary'></TextField>
                        <FormControl size='samll' fullWidth>
                            <InputLabel color='secondary' size='small' id="demo-simple-select-label">Specialty</InputLabel>
                            <Select
                                name='specialty'
                                color='secondary'
                                size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Specialty"
                            >{
                                    services?.data?.map((data, index) => <MenuItem key={data?._id} value={data?.name}>{data?.name}</MenuItem>)
                                }

                            </Select>
                        </FormControl>
                        <label name='file' htmlFor="file">
                            <Box p={5} sx={{ border: '1px dashed #bdbdbd' }} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
                                {image ? <img style={{ width: '100%', objectFit: "cover" }} src={URL.createObjectURL(image)} alt='imge' /> : <>
                                    <Typography textAlign={'center'} color={'text.primary'}>Upload doctor photo</Typography>
                                    <CloudUploadOutlinedIcon fontSize='large' ></CloudUploadOutlinedIcon>
                                </>}



                            </Box>
                        </label>
                        <input accept='image/*' name='file' onChange={(e) => setImage(e.target.files[0])} style={{ display: 'none' }} id='file' fullWidth size='small' type='file' color='secondary'></input>
                        <Button type='submit' fullWidth variant='contained' size='large' color='thirdly'>Add</Button>
                    </form>
                </Box>


            </Paper>
        </Box>
    );
};

export default AddDoctor;