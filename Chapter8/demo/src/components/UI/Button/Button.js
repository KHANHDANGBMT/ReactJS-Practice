import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <button onClick={props.clicked} disabled={props.disabled} className="Button" className={props.btnType}>
            {props.children}
        </button>
    );
}

export default Button;