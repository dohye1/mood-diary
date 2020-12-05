import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar } from 'antd';
import {getDiary} from '../../actions/diaryAction';
import {getMe} from '../../actions/userAction';
import Chart from '../Chart';
import Modal from '../Modal';

import "./styles.scss";

const LandingPage = (props) =>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState(new Date(Date.now()).getMonth() + 1)
    const [openModal, setOpenModal] = useState(false);
    const [pickDate, setPickDate] = useState(`${new Date(Date.now()).getFullYear()}-${
      new Date(Date.now()).getMonth() + 1
    }`); 
    const [monthOrYear, setMonthOrYear] = useState(true);
    const isAuth = useSelector((state)=>state.userReducer.isAuth);
    const user = useSelector((state)=>state.userReducer.user);
    const diaries = useSelector(state=>state.diaryReducer.diaries);

    // 구체적인 날짜가 선택되었을때 작동
    // 일기를 작성할때 사용
    const onSelect = async(value) =>{
        setPickDate(value.format('YYYY-MM-DD'));   
        await setOpenModal(true);
        setOpenModal(false);
        console.log(789);
    }

    // 년과 월이 서로 변경될때 작동
    // 이때 선택된 패널의 데이터를 가져오면 될듯
    const onPanelChange = async(value) =>{
        console.log('패널이바뀜');
        console.log(value.format('YYYY-MM-DD'));
    }


    const dateCellRender = (value) =>{
        let dateItem;
        if(value.format('DD')==="01"){
            const month = Number(value.format('MM'))-1;            
            setTitle(month === 0? 12 : month);
            setMonthOrYear(true);
        }
        let date = value.format("YYYY-MM-DD").split("-");
        let day = parseInt(date[2]);
        let month = parseInt(date[1]);
        let year = parseInt(date[0]);
        if(diaries.length > 0){
            dateItem = diaries.find(diary=>diary.post_year === year && diary.post_month===month && diary.post_day === day);
        }
        return (
            <>
                {dateItem && dateItem.content}
            </>
        )
    }

    const monthCellRender = (value) =>{
        let monthItem=[];
        if(value.format('MM')==="01"){
            setTitle(value.format('YYYY'));
            setMonthOrYear(false);
        }
        let date = value.format("YYYY-MM-DD").split("-");
        let month = parseInt(date[1]);
        let year = parseInt(date[0]);
        if(diaries.length > 0){
            monthItem = diaries.filter(diary=>diary.post_year === year && diary.post_month===month);
        }
        monthItem.sort((a, b)=>Number(a.post_day) - Number(b.post_day));
        if (monthItem.length > 0){
            return monthItem.map((diary)=> 
            <>
                <div>{diary.post_day}</div>
                <div>{diary.mood}</div>
                <div>{diary.content}</div>
            </>)
        }
    }

    useEffect(()=>{
        console.log('초기에 실행됨')
        if(isAuth === null){
            props.history.push('/login');
        }else{
            dispatch(getDiary());
            if(Object.keys(user).length === 0){
                dispatch(getMe())
            }
        }
    },[]);

    return (
        <div className="landing-container">
            <h2 className='title'>{title}</h2>
            <h3 className="self-promise">{user.selfPromise}</h3>
            <Chart date={pickDate} mode={monthOrYear}/>
            <Calendar 
                onSelect={onSelect}
                onPanelChange={onPanelChange}
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
            />
            <Modal date={pickDate} openModal={openModal}/>
        </div>
    )
}

export default LandingPage;