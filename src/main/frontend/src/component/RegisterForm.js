import React, { useState } from 'react';
import './../style/LoginForm.css';
import Header from "./Header"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {

    const navigate = useNavigate();

    const [loginId, setLoginId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginIdChange = (e) => {
        setLoginId(e.target.value);
        document.getElementById('idCheckBtn').value = 0;
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const idCheck = () => {
        console.log("idCheck : " + loginId)
        axios.post('http://localhost:8899/user/checkId', {
            userId : loginId
        }, {
            headers : {
                "Content-Type" : "application/json"
            }
        }).then( res => {
            if(JSON.stringify(res.data) == 'true'  ){
                alert("사용 가능한 아이디입니다.")
                document.getElementById('idCheckBtn').value = 1;
            }else{
                alert("이미 등록된 아이디입니다.")
                document.getElementById('idCheckBtn').value = 2;
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("? " + document.getElementById('idCheckBtn').value)
        console.log(`id : ${loginId}, Email: ${email}, Password: ${password}`);
        console.log(loginId +"/" + password +"/" + email)
        if( document.getElementById('idCheckBtn').value != 1) {
            alert("아이디 중복확인을 해주세요")
            return false;
        }else{
            axios.post('http://localhost:8899/user/register', {
                userId : loginId,
                userPwd : password,
                userEmail : email
            }, {
                headers : {
                    "Content-Type" : "application/json"
                }
            }).then( res => {
                console.log(res.data);
                if(res.data.userId != null){
                    alert("회원가입이 완료되었습니다. 로그인을 해주세요");
                    navigate('/login');
                }else{
                    alert("회원가입에 실패하였습니다.")
                }
            })
        }
    };

    return (
        <>
            <Header/>
        <div className="login-form">
            <h1>JOIN US  <br/> </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div style={{display:"flex"}}>
                    <div style={{width :"70%"}}>
                        <label htmlFor="id">Id</label>
                        <input
                            type="text"
                            id="id"
                            value={loginId}
                            onChange={handleLoginIdChange}
                            required
                        />
                    </div>
                    <div>
                        <label><button id={'idCheckBtn'} value={0} type={"button"} onClick={ idCheck } style={{marginTop:"35px"}}> ID check</button></label>
                    </div>
                    </div>
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
