import React,{useContext, useState} from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import {DrawerContext} from './context';


const DrawerComp = () =>{
    const [Open, setOpen] = useContext(DrawerContext);
    return(
        <>
        <button onClick={ () => setOpen(true)} >Open</button>
        <Drawer
        open = {Open}
        variant="temporary"
        anchor="left"
        onClose={() => setOpen(false)}
        
        
        >
        <List>
            <ListItem button>
                <ListItemText primary="Home"/>                
            </ListItem>
            <ListItem button>
                <ListItemText primary="Sign in" />
            </ListItem>
        </List>
        </Drawer>

        </>

    );

}

export default DrawerComp;
