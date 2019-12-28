import React from 'react'
// Radium
// import Radium from 'radium'

const person = (props) => {
    // Radium
    // const style ={
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} age: {props.age} </p>
            <input type="text" onChange={props.changed} value={props.currentName}></input>
        </div>
    );
}

// export default Radium(person); // Radium
export default person;