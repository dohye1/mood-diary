import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";

const Nav = () => {
    const isUser = true;
    const isClicked = false;
    const [isTop, setIsTop] = useState(true); // 화면에 보여지는 데이터가 아니라 css관련 설정 state

    const scrollBG = () =>{
        if (window.scrollY !== 0) {
            setIsTop(false);
        } else {
            setIsTop(true);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollBG);
    })
    return (
    <div className={"nav-container" + (isTop?" top":" noTop")}>
        <div className="side"></div>
        <div className="logo">
            <Link to="/">MOOD</Link>
        </div>
        {
            isUser ? (
                <ul className="side user-info">
                    <li><Link to="/my">김땡떙 님</Link></li>
                    <li>LOGOUT</li>
                </ul>
        ):(<div className="side"></div>)
        }
    </div>
    )
}

export default Nav;