import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Calendar } from 'antd';
import "./styles.scss";

const CalendarPage =() =>{
    const [pickDate, setPickDate] = useState(`${new Date(Date.now()).getFullYear()}-${
      new Date(Date.now()).getMonth() + 1
    }`)


    const onSelect = async(value) =>{
        setPickDate(value.format('YYYY-MM-DD'));
    }

    const onPanelChange = () =>{

    }
    const dateCellRender = () =>{

    }
    const monthCellRender = () =>{

    }


    return (
        <Calendar 
            onSelect={onSelect}
            onPanelChange={onPanelChange}
            dateCellRender={dateCellRender}
            monthCellRender={monthCellRender}
        />
    )
}

export default CalendarPage;