import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Calendar } from 'antd';
import Chart from '../Chart';
import "./styles.scss";

const LandingPage = (props) =>{
    const [title, setTitle] = useState(new Date(Date.now()).getMonth() + 1)
    
    const isAuth = useSelector((state)=>state.userReducer.isAuth);

    const [pickDate, setPickDate] = useState(`${new Date(Date.now()).getFullYear()}-${
      new Date(Date.now()).getMonth() + 1
    }`);
   
    // 구체적인 날짜가 선택되었을때 작동
    // 일기를 작성할때 사용
    const onSelect = async(value, mode) =>{
        setPickDate(value.format('YYYY-MM-DD'));    
        console.log(mode);
    }

    // 년과 월이 서로 변경될때 작동
    // 이때 선택된 패널의 데이터를 가져오면 될듯
    const onPanelChange = async(value) =>{
        console.log('패널이바뀜');
        console.log(value.format('YYYY-MM-DD'));
    }

    const dateCellRender = (value) =>{
        if(value.format('DD')==="01"){
            const month = Number(value.format('MM'))-1;            
            setTitle(month === 0? 12 : month);
        }
    }

    const monthCellRender = (value) =>{
        if(value.format('MM')==="01"){
            setTitle(value.format('YYYY'));
        }
    }

    useEffect(()=>{
        if(!isAuth){
            props.history.push('/login');
        }
    })

    return (
        <div className="landing-container">
            <h2 className='title'>{title}</h2>
            <h3 className="self-promise">나의다짐!!!</h3>
            <Chart />
            <Calendar 
                onSelect={onSelect}
                onPanelChange={onPanelChange}
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
        />
        </div>


    )
}

export default LandingPage;