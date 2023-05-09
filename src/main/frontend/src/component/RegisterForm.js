import React, { useState } from 'react';
import './../style/LoginForm.css';
import Header from "./Header"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [loginId, setLoginId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your login logic here
        console.log(`Email: ${email}, Password: ${password}`);
    };

    return (
        <>
            <Header/>
        <div className="login-form">
            <h1>JOIN US  <br/> </h1>
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
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
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
                <button type="submit" style={{width : '100%'}}>REGISTER</button>
            </form>
            <label> Already have an account? &nbsp;&nbsp;&nbsp;
                <a href='' onClick={ () => {navigate('/login')}} style={{width : '100%'}}>
                    <h2>&#10132;LOGIN</h2>
                </a>
            </label>

        </div>
        </>
    );
};

export default RegisterForm;
