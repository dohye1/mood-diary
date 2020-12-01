import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Calendar } from 'antd';
import Chart from '../Chart';
import "./styles.scss";

const CalendarPage = () =>{
    return (
        <div className="cal-container">
            <h2 className='title'>5월</h2>
            <h3 className="self-promise">나의다짐!!!</h3>
            <Chart />
            <Calendar/>

        </div>


    )
}

export default CalendarPage;