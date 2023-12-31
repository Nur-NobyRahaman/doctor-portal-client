import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputLabel, LinearProgress, OutlinedInput, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    var pattern = /^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/;
    const [signInWithGoogle, gUser, gLoading,
        gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        sUser,
        sLoading,
        sError,
    ] = useSignInWithEmailAndPassword(auth);

    const [error, setError] = useState({
        value: false,
        message: ''
    });

    const [form, setForm] = useState({
        email: '',
        password: ''
    });
const [token]=useToken(gUser || sUser)
    let signInError;
    let location = useLocation()
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


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

    if (gError || sError) {
        signInError = <Typography gutterBottom color={'error'} variant='body1'>{gError?.message || sError?.message}</Typography>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            await signInWithEmailAndPassword(email, password)
          
        }

    };
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={"center"} height={'80vh'}>

            <Paper elevation={3} sx={{ width: '22vw' }}>
                {(sLoading || gLoading) && <LinearProgress color="secondary" />}
                <Box p={5}>
                    <Typography mb={3} textAlign={'center'} variant='h6'>Login</Typography>

                    <form onSubmit={handleSubmit} action="" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px' }}>
                        <TextField name='email' required type='email' fullWidth color='secondary' size='small' label='Email' ></TextField>

                        <Box>
                            <TextField fullWidth id="outlined-adornment-password"
                                InputProps={{
                                    endAdornment: <InputAdornment position='end'>
                                        <IconButton onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}

                                        </IconButton>
                                    </InputAdornment>
                                }} required helperText={error?.message} error={error?.value} name='password' type={showPassword ? 'text' : 'password'} color='secondary' size='small' label='Password' ></TextField >

                            <Link href="#" >
                                <Typography variant="body2">Forgot Password?</Typography>
                               
                            </Link>
                        </Box>
                        <Box>
                            {signInError}
                            <Button type='submit' fullWidth color='thirdly' variant='contained' size='large'>Login</Button>

                        </Box>
                    </form>

                    <Typography mt={1.5} mb={1} textAlign={'center'} variant='body2'>New to Doctors Portal?  <Link to="/signUp" variant="body2">
                        {'Create new account'}
                    </Link></Typography>
                    <Divider sx={{ mb: 2 }}>OR</Divider>
                    <Button onClick={() => signInWithGoogle()} fullWidth color='fourthly' variant='contained' size='large'>continue white google</Button>
                </Box>

            </Paper>


        </Box >
    );
};

export default Login;