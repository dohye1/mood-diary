import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./styles.scss";

const RegisterPage = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailCss, setEmailCss] = useState('');
    const [nameCss, setNameCss] = useState('');
    const [pwCss, setPwCss] = useState('');
    const [confirmPwCss, setConfirmPwCss] = useState('');

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
        if (name === '') {
            setNameCss('warning');
            setTimeout(() => setNameCss(''), 1500);
        }
        if (confirmPassword === '') {
            setConfirmPwCss('warning');
            setTimeout(() => setConfirmPwCss(''), 1500);
        }
        if (
            (email !== '' &&
                password !== '' &&
                name !== '' &&
                confirmPassword !== ''
            )
        ) {
            // dispatch(
            //     register({
            //         Email,
            //         Password,
            //         Name,
            //         IdNum,
            //         ConfirmPassword,
            //         Department,
            //         Role,
            //     }),
            // );
        }
    };

    const handlePw = (e) => {
        if (e.currentTarget.value !== password) {
            setConfirmPwCss('warning');
        } else {
            setConfirmPassword(e.currentTarget.value);
            setConfirmPwCss('');
        }
    };

    return (
        <div className="register-container">
            <h1>REGISTER</h1>
            <section className="register-form">
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
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="off"
                            required
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                        <label htmlFor="name" className={nameCss}>
                            NAME
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
                    <div className="input-box">
                        <input
                            type="password"
                            name="confirm-pw"
                            id="confirm-pw"
                            autoComplete="off"
                            required
                            onChange={handlePw}
                        />
                        <label htmlFor="confirm-pw" className={confirmPwCss}>
                            CONFIRM PASSWORD
                        </label>
                    </div>
                    <div className="submit-btn">
                        <button type="submit" onClick={handleClick}>
                            REGISTER
                        </button>
                    </div>
                </form>
                <div className="caption">
                    <p>
                        <Link to="/login">Login 하러가기</Link>
                    </p>
                </div>
            </section>
            
        </div>
    )
}

export default RegisterPage;