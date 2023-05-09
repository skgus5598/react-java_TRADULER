import React, { useState } from 'react';
import Header from "./Header"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";
import MyCalendar from "../MyCalendar";
import './../style/MyCalendar.css'

const MyPage = () => {
    const navigate = useNavigate();


    return (
        <>
            <Header/>
            <div class='calendar-head' >
                <MyCalendar/>
            </div>
        </>
    );
};

export default MyPage;
