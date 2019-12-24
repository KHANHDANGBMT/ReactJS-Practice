import React from 'react'

import './Person.css'

const person =(prop)=>{
    //return <p onClick={() => prop.click(prop.name)}>Hello, Im {prop.name} class, I'm {prop.age} year old</p>
    return (
        <div className="Person">
            <p>Hello, Im {prop.name} class, I'm {prop.age} year old</p>
            <input type="text" onChange={prop.changed} value={prop.currentName}/>
        </div>
    );
}

export default person;