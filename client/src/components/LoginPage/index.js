import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/userAction';
import './styles.scss';

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const loginResult = useSelector((state)=>state.userReducer.login);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailCss, setEmailCss] = useState('');
    const [pwCss, setPwCss] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        if (email === '') {
            setEmailCss('warning');
            setTimeout(() => setEmailCss(''), 1500);
        }
        if (password === '') {
            setPwCss('warning');
            setTimeout(() => setPwCss(''), 1500);
        }
        //email 타입체크
        if(!(/^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+)$/.test(email))){
            alert('이메일 형식에 맞게 입력해 주세요.');
            return false;
        }
        if (password !== '') {
            dispatch(login({email, password}));
        }
    };

    useEffect(() => {
        if (loginResult) {
            props.history.push('/');
        }
    });

    return (
        <div className="login-container">
            <h1>LOG IN</h1>
            <section className="login-form">
                <form>
                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            autoComplete="off"
                            required
                            onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <label htmlFor="email" className={emailCss}>
                            EMAIL
                        </label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="pw"
                            id="pw"
                            autoComplete="off"
                            required
                            onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <label htmlFor="pw" className={pwCss}>
                            PASSWORD
                        </label>
                    </div>
                    <div className="submit-btn">
                        <button type="submit" onClick={handleClick}>
                            LOGIN
                        </button>
                    </div>
                </form>
                <div className="caption">
                    <p>
                        <Link to="/register">register 하러가기</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
