import React, { useContext, useState } from 'react';
import { AppBar, Container, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {DrawerContext} from './context';


const Appbar = () =>{
    const[open,setOpen] = useContext(DrawerContext);
    return(
        <AppBar position='static' style={{zIndex: 1000}} >
            <Container maxWidth="false" disableGutters>
            <Toolbar variant='dense'>
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' color='inherit'>
                    QuickMail
                </Typography>
                
            </Toolbar>
            </Container>
        </AppBar>


    );

}
export default Appbar;