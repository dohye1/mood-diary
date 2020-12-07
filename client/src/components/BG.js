import React from 'react';
import { useSelector } from 'react-redux';

const BG = () =>{
    const colors = useSelector((state)=>state.globalReducer.colors);
    return (<div style={{"background":`linear-gradient(0.25turn, ${colors[0]}, ${colors[1]}, ${colors[2]})`, "minWidth":"100%", "minHeight":"100%", "position":"fixed", "top":"0", "zIndex":"-1"}}></div>)
}

export default BG;