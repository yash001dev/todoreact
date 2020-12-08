import React from 'react';
import './button.style.css';

const InputField=({placeHolder,type})=>{
    return <input className="inputField" type={type} placeholder={placeHolder} />;
}