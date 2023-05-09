import React, { useState } from 'react';
import './../style/LoginForm.css';
import Header from "./Header"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [loginId, setLoginId] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your login logic here
        console.log(`id: ${loginId}, Password: ${password}`);
    };

    return (
        <>
            <Header/>
        <div className="login-form">
            <h1>WELCOME BACK ! </h1><br/>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">Id</label>
                    <input
                        type="text"
                        id="id"
                        value={loginId}
                        onChange={handleLoginIdChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit" style={{width : '100%'}}>Login</button>
            </form>
            <br/>
            <label> Don't you have an account? &nbsp;&nbsp;&nbsp;
                <a href='' onClick={ () => {navigate('/register')}} style={{width : '100%'}}>
                    <h2>&#10132;REGISTER</h2>
                </a>
            </label>
        </div>
        </>
    );
};

export default LoginForm;
