import LockOutlined from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SignUp = () =>{
    return(
        
        <Container component= "main" maxWidth="xs">
            
            <Box sx={{
                marginTop: 8,
                display:"flex",
                flexDirection:"column",
                alignItems:'center',
                

            }}
            >
                <Avatar sx={{m:1, backgroundColor:"purple"}}>
                <LockOutlined/>
                </Avatar>
                <Typography component="h1">
                    Sign Up
                </Typography>

                <Box component="form" noValidate sx={{ mt:3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                            autoComplete="given-name"
                            name="first-name"
                            label="First Name"
                            id="firstname"
                            fullWidth
                            required
                            autoFocus                            
                            />                            
                        </Grid>


                        <Grid item xs={12} sm={6}>
                            <TextField 
                            label="Last Name"
                            id="lastname"
                            name="last-name"
                            fullWidth
                            autoFocus
                            autoComplete="given-name"
                            required                            
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                            name="password"
                            type="password"
                            label="Password"
                            id="password"
                            required
                            autoFocus
                            fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            name="email"
                            label="Email"
                            id="email"
                            type="email"
                            required
                            fullWidth  
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel 
                            control={<Checkbox value="true" />}
                            label="Sign up for latest new and information from 
                            from @ team"
 
                            />
                        </Grid>
                    </Grid>

                    <Button 
                    fullWidth
                    type="submit"
                    
                    variant="contained"
                    sx={{ mt:3, mb:3}}
                    >
                        submit
                        </Button>
                </Box>
            </Box>
            


        </Container>

    );

}

export default SignUp;