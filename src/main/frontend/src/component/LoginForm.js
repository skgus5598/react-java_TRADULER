import React, { useState } from 'react';
import './../style/LoginForm.css';
import Header from "./Header"; // Import the CSS file for styling
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

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

    //Login Cookie create
    const expireTime = new Date();
    expireTime.setMinutes(expireTime.getMinutes()+1) // 1mins

    const obj = {
        value : loginId,
        expire : expireTime.toUTCString() // GMT
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`id: ${loginId}, Password: ${password}`);

        axios.post('http://localhost:8899/user/login', {
            userId : loginId,
            userPwd : password
        }, {
            headers : {"Content-Type" : "application/json"}
        }).then( res => {
            console.log(res.data);
            if(res.data == 3){
            //    localStorage.setItem("userCookie", JSON.stringify(res.data))
                localStorage.setItem("userCookie", JSON.stringify(obj))

                navigate('/')

            }else if(res.data == 1){
                alert("존재하지 않는 아이디입니다.")
            }else if(res.data == 2) {
                alert("비밀번호를 다시 입력해주세요")
            }
        })

    };

    return (
        <>
            <Header/>
        <div className="login-form">
            <h1>WELCOME! </h1><br/>
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
                    <h2>&#10132;SIGN UP</h2>
                </a>
            </label>
        </div>
        </>
    );
};

export default LoginForm;
