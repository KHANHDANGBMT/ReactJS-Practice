import React, { useEffect } from 'react';

const Cockpit = (props) => {
    console.log('[Cockpit.js] rendering');
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Save to cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit].js cleanup work with useEffect');
        }
    }, []);
    return (
        <div >
            <h1>{props.title}</h1>
            <button onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};
export default Cockpit;