import React from 'react'
import Button from '@mui/material/Button';
import { Avatar, Box, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



const login = () =>{
    return(
        <Container component= "main" maxWidth='xs' >
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',                                            
            }}            
            >
                <Avatar sx={{m:1, backgroundColor: 'purple'}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1'>
                    Sign-In
                </Typography>
                <Box component="form" noValidate sx={{mt:1}}>
                    <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    label="Email Address"
                    name='email' />

                    <TextField
                    margin='normal'
                    fullWidth
                    id='password'
                    label="Password"
                    name='password'
                    type='password'  />

                    <FormControlLabel
                    control={<Checkbox value= "remember" /> }
                    label ='Remember me'
                    />

                    <Button 
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{mt: 3}}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
export default login;