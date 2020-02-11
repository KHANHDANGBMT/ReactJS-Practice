import React, { useEffect, useRef } from 'react';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    console.log('[Cockpit.js] rendering');
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // setTimeout(() => {
        //     alert('Save to cloud');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit].js cleanup work with useEffect');
        }
    }, []);
    return (
        <div >
            <h1>{props.title}</h1>
            <button onClick={props.clicked} ref={toggleBtnRef}>Toggle Persons</button>
            <button onClick={props.login}>Log in</button>
        </div>
    );
};
export default Cockpit;