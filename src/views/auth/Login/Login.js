import React, {useState} from 'react';
import './Login.css';
import logo from '../../../assets/images/outcode.png'

const Login = () => {
    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const currentYear = new Date().getFullYear();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here (e.g., calling an API)
        console.log('Login submitted');
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <div className="container-fluid h-100">
                <h1 className="page-title">Estimate Out</h1>

                <form className={'auth-form'} onSubmit={handleSubmit}>
                    <h2 className="form-title">Login</h2>

                    <div className="form-group">
                        {/*<label htmlFor="username">Email:</label>*/}
                        <input
                            type="text"
                            id="username"
                            placeholder={'Enter your email'}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        {/*<label htmlFor="password">Password:</label>*/}
                        <input
                            type="password"
                            id="password"
                            placeholder={'Enter your password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <br/>
                    <button className={'btn btn-primary btn-login'} type="submit">Log In</button>
                </form>

                <div className="footer">
                    <div className="d-flex align-items-center">
                        <img className="copyright-img" src={logo} alt="outcode-logo"/>
                            <span className="page-title p-0">Outcode Software</span>
                    </div>
                    <div className="copyright">
                        Copyright © {currentYear} Outcode. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
