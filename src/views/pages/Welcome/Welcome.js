import React, {useState} from 'react';
import './Welcome.css';
import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate('/' + path);
    }


     return (
        <div className="login-container">
            <div className="container-fluid h-100">
                <h1 className="page-title pb-3">Welcome to EstimateOut</h1>
                <div className="welcome-hints mt-3">
                    <div>
                        Select ‘Add new task’ to create new task for a tech stack.
                    </div>
                    <div>
                        Select ‘Add new project’ to create new project for estimation.
                    </div>
                    <div>
                        Select ‘Open project’ to open existing project estimation
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <button className="d-flex flex-column align-items-center btn-container"
                    onClick={ () => navigateTo('new-task')}
                    >

                     <span className="btn-label">Add New Task</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
