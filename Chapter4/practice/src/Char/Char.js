import React from 'react'

const char = (props) => {
    const Char={
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',  
    };
    return (
        <div style={Char} onClick={props.clicked}>
            {props.value}
        </div>
    );
}

export default char;