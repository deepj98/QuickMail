import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from "./components/auth/login";
import SignUp from "./components/auth/signup";


const Routers = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact Component={login} />
                <Route path="/signup" exact Component={SignUp}/>              
            </Routes>
        </Router>
    );

}
export default Routers;