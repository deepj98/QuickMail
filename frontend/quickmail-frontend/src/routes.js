import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";


const Routers = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact Component={login} />
                <Route path="/signup" exact Component={SignUp}/> 
                <Route path="/dashboard" exact Component={Dashboard} />
                <Route path="/home" exact Component={Home} />
                       
            </Routes>
        </Router>
    );

}
export default Routers;