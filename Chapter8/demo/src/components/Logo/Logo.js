import React from 'react';
import burgerLogo from '../../assets/image/burger-logo.png';
import './Logo.css'

const logo = (props) =>{
    return (
        <div className="Logos" style={{height: props.height}}>
            <img src={burgerLogo} alt="My Burger logo"></img>
        </div>
    );
}

export default logo;