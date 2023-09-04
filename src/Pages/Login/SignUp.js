import { Box, Button, Divider, IconButton, InputAdornment, LinearProgress, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    var pattern = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;
    const [signInWithGoogle, gUser, gLoading,
        gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        cError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [error, setError] = useState({
        value: false,
        message: ''
    });

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    let signInError;
    const navigate = useNavigate();
    const [token] = useToken(user || gUser)


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (e) => {
        // setForm({
        //     ...form,
        //     [e.target.name]: e.target.value
        // })
    }

    if (gError || cError || updateError) {
        signInError = <Typography gutterBottom color={'error'} variant='body1'>{gError?.message || cError?.message || updateError?.message}</Typography>
    }
    if (token) {
        navigate('/appointment');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value
        if (!pattern.test(password)) {
            setError({
                value: true,
                message: 'Must contain at least one number and one uppercase and lowercase letter, and at least 9 or more characters'
            })
            console.log('valid password');
        }
        else if (pattern.test(password)) {
            setError({})
            setForm({
                email,
                password
            })
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name })
        }

    };
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={"center"} height={'80vh'}>

            <Paper elevation={3} sx={{ width: '22vw' }}>
                {(loading || gLoading || updating) && <LinearProgress color="secondary" />}
                <Box p={5}>
                    <Typography mb={3} textAlign={'center'} variant='h6'>Sign Up</Typography>

                    <form onSubmit={handleSubmit} action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px' }}>
                        <TextField name='name' required type='text' fullWidth color='secondary' size='small' label='Name' ></TextField>
                        <TextField name='email' required type='email' fullWidth color='secondary' size='small' label='Email' ></TextField>

                        <TextField fullWidth id="outlined-adornment-password"
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <IconButton onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}

                                    </IconButton>
                                </InputAdornment>
                            }} required helperText={error?.message} error={error?.value} name='password' type={showPassword ? 'text' : 'password'} color='secondary' size='small' label='Password' ></TextField >
                        <Box>
                            {signInError}
                            <Button type='submit' fullWidth color='thirdly' variant='contained' size='large'>Sign Up</Button>

                        </Box>
                    </form>

                    <Typography mt={1.5} mb={1} textAlign={'center'} variant='body2'>Already have an account?  <Link to="/login" variant="body2">
                        {'Please Login'}
                    </Link></Typography>
                    <Divider sx={{ mb: 2 }}>OR</Divider>
                    <Button onClick={() => signInWithGoogle()} fullWidth color='fourthly' variant='contained' size='large'>continue white google</Button>
                </Box>

            </Paper>


        </Box >
    );
};

export default SignUp;