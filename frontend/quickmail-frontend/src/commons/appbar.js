import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Appbar = () =>{
    return(
        <AppBar position='static' style={{zIndex: 1000}} >
            <Container maxWidth="false" disableGutters>
            <Toolbar variant='dense'>
                <Typography variant='h6' color='inherit'>
                    QuickMail
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>


    );

}
export default Appbar;