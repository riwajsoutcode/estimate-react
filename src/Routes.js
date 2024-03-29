import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./views/auth/Login/Login";

const RoutesComponent  = () => {
    return (
        <Router>
            <div>
                {/* Define routes using Route component */}
                <Routes>
                    {/* Route for the login page */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                    {/* Other routes */}
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    {/* Default route */}
                    {/* <Route path="/" element={<Home />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default RoutesComponent;
