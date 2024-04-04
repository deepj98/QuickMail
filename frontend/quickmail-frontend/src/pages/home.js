import React from "react";
import Appbar from "../commons/appbar";
import { Container } from "@mui/material";
import DrawerComp from "../commons/drawer";


const Home = () =>{
    return(
        <Container component='main' maxWidth="100%" disableGutters>
            <Appbar />
            <DrawerComp />
        </Container>

    );


}

export default Home;