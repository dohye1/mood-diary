import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editMe} from '../../actions/userAction';
import {changeBG} from '../../actions/globalAction';

import './styles.scss';

const SettingPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const colors = useSelector((state) => state.globalReducer.colors);

  const [name, setName] = useState(user.name);
  const [selfPromise, setSelfPromise] = useState(user.selfPromise);
  const [leftColor, setLeftColor] = useState(colors[0]);
  const [midColor, setMidColor] = useState(colors[1]);
  const [rightColor, setRightColor] = useState(colors[2]);
  const handleProfile = (e) => {
    e.preventDefault();
    dispatch(editMe({
      name,
      selfPromise
    }))

  };

  const handleBG = (e) =>{
    e.preventDefault();
    dispatch(changeBG([leftColor, midColor, rightColor]));
  }

  useEffect(()=>{

  },[colors])
  return (
    <div className='setting-container'>
        <div className="profile-box box">
            <h2 className='page-title'>PROFILE</h2>
            <hr />
              <form className='info-form' onSubmit={handleProfile}>
                <p className='title'>E-MAIL</p>
                <p className='email' name='email'>
                  {user.email}
                </p>
                <p className='title'>NICK NAME</p>
                <input
                  type='text'
                  name='nickname'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className='title'>SELF PROMISE</p>
                <input
                  type='text'
                  name='goal'
                  value={selfPromise}
                  onChange={(e) => setSelfPromise(e.target.value)}
                />
                <button className='edit-btn' type='submit'>
                  EDIT
                </button>
              </form>
        </div>
        <div className="bg-box box">
            <h2 className='page-title'>BG COLOR</h2>
            <hr />
            <div className="color-pick-box">
              <div className="color-pick">
                <label htmlFor="left">LEFT</label>
                <input type="color" id="left" name="left" value={leftColor} onChange={(e)=>setLeftColor(e.currentTarget.value)} />
              </div>
              <div className="color-pick">
                <label htmlFor="mid">MIDDLE</label>
                <input type="color" id="mid" name="mid" value={midColor} onChange={(e)=>setMidColor(e.currentTarget.value)} />
              </div>
              <div className="color-pick">
                <label htmlFor="right">RIGHT</label>
                <input type="color" id="right" name="right" value={rightColor} onChange={(e)=>setRightColor(e.currentTarget.value)}/>
              </div>
            </div>
            <div className="display-box" style={{"background":`linear-gradient(0.25turn,${leftColor}, ${midColor}, ${rightColor})`}}></div>
            <button className='bg-btn' onClick={handleBG}>
                  적용하기
            </button>
      </div>
    </div>
  );
};

export default SettingPage;
