import React from "react";
import Appbar from "../commons/appbar";
import { Container, Grid, Typography, colors } from "@mui/material";
import DrawerComp from "../commons/drawer";
import { DrawerProvider } from "../commons/context";


const Home = () =>{

    const services = [
        {name: "Long distance service", icon: '', backgroundColor: '#E44E2D' },
        {name: "Nearby", icon: '', backgroundColor: '#61BDDC'},
        {name: "Light weight", icon: '', backgroundColor: '#67DC61'},
        {name: "Heavy", icon: '', backgroundColor: '#6161DC'},
    ];

    const serviceTileStyle = (backgroundColor) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Center content vertically
        minHeight: '200px', // Adjust minimum height as needed
        backgroundColor, // Optional background color
        borderRadius: '20px', // Optional rounded corners
        
      });

    return(
        <DrawerProvider>
        <Container component='main' maxWidth="100%" disableGutters>
            <Appbar />
            <DrawerComp />

            <Container component="main" maxWidth="lg"> {/* Set max-width for responsiveness */}
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Grid key={service.name} item xs={12} sm={6} md={4}>  {/* Responsive sizing */}
            <div style={serviceTileStyle(service.backgroundColor)} >
            
              <Typography color="white" variant="h5" style={{fontStyle:"bold"}} gutterBottom>
                {service.name}
              </Typography>
              
              
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>

        </Container>
        </DrawerProvider>

    );
}

export default Home;