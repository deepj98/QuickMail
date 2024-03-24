import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import login from "./components/auth/login";


const Routers = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact Component={login} />
              
            </Routes>
        </Router>
    );

}
export default Routers;