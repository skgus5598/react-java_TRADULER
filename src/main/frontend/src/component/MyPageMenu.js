import React, { useState } from 'react';
import './../style/LoginForm.css';
import Header from "./Header"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import './../style/traduler.css'

const MyPageMenu = () => {
    const navigate = useNavigate();


    return (
        <>
            <Header/>
            <div style={{display : 'flex', textAlign: 'center', marginTop :'13%', marginLeft:'33.33%'}}>
               <a className="mytradulermenu" onClick={ () => {navigate('/mySchedule')}}>
                <div >
                    <h1>Plan<br/> My Trip</h1><br/>
                </div>
               </a>
                <a className="mytradulermenu" onClick={ () => {navigate('/myPage')}}>
                <div >
                    <h1>My Page </h1><br/>
                </div>
                </a>
            </div>
        </>
    );
};

export default MyPageMenu;
