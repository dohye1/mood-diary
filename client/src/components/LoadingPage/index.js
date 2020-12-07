import React from 'react';
import { useSelector } from 'react-redux';

const LoadingPage = () =>{
    const user = useSelector(state=>state.userReducer.user);
    return(
        <div className="loading-page">
            {}
        </div>
    )
}

export default LoadingPage;