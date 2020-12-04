import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {editMe} from '../../actions/userAction';

import './styles.scss';

const SettingPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const [name, setName] = useState(user.name);
  const [selfPromise, setSelfPromise] = useState(user.selfPromise);

  const handleProfile = (e) => {
    e.preventDefault();
    dispatch(editMe({
      name,
      selfPromise
    }))

  };

//   useEffect(() => {
//       setAvatar(userInfo.avatar);
//       setNickname(userInfo.nickname);
//       setEmail(userInfo.email);
//       setPromise(userInfo.promise);
//     });

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
            <div className='user-info'>
                <form className='info-form'>
                   
                </form>
            </div>
        </div>
    </div>
  );
};

export default SettingPage;
