import React from "react";
import Appbar from "../commons/appbar";
import { Container } from "@mui/material";
import DrawerComp from "../commons/drawer";
import { DrawerProvider } from "../commons/context";


const Home = () =>{
    return(
        <DrawerProvider>
        <Container component='main' maxWidth="100%" disableGutters>
            <Appbar />
            <DrawerComp />
        </Container>
        </DrawerProvider>

    );
}

export default Home;