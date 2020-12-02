import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Chart from '../Chart';
import CalendarPage from '../CalendarPage';
import "./styles.scss";

const LandingPage = () =>{
    return (
        <div className="landing-container">
            <h2 className='title'>5월</h2>
            <h3 className="self-promise">나의다짐!!!</h3>
            <Chart />
            <CalendarPage />
        </div>


    )
}

export default LandingPage;