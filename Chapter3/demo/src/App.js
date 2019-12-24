import React, { Component } from 'react';
//import React, { useState } from 'react'; // useState hooks
import './App.css';
import Person from './Person/Person';
import Hello from './Person/Class';

// --------------use State for class--------------
class App extends Component {
  state ={
    person:[
      {name:"Luong", age: 18},
      {name:"Khanh", age: 12},
      {name:"Huong", age: 11},
    ]
  };
  clickButton =()=>{
    this.setState({
      person:[
        {name:"Luong", age: 18},
        {name:"KhanhDangq", age: 12},
        {name:"Huong", age: 19},
      ]
    })
  }
  nameChangedHandle=(event)=>{
    this.setState({
      person:[
        {name:"Luong", age: 18},
        {name: event.target.value, age: 12},
        {name:"Huong", age: 19},
      ]
    })
  }
  
  render(){
    const button ={
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px'
    };
    return (
      <div className="App">
        <h1>Say hello React app</h1>
        <button onClick={this.clickButton} style={button}>Click</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>

        <Person name={this.state.person[1].name} 
        age={this.state.person[1].age} 
        changed={this.nameChangedHandle} 
        currentName = {this.state.person[1].name}>Person tag</Person>

        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Hello name="Computer">children of Hello</Hello>
      </div>
    );
  }
  //return React.createElement("div",{className:"App"}, React.createElement('h1',null,'Say hello react app222',));
}


// --------------use State for function--------------
// const App = props => {
//   const [personState, setPersonState] = useState({
//     person:[
//       {name:"Luong", age: 18},
//       {name:"Khanh", age: 12},
//       {name:"Huong", age: 11},
//     ]
//   });
//   const clickButton =()=>{
//     setPersonState({
//       person:[
//         {name: "newName", age: 18},
//         {name:"KhanhDangQuoc", age: 12},
//         {name:"Huong", age: 19},
//       ]
//     });
//   }
//   const onClickPerson = (name) => {
//     alert(name)
//   }
//     return (
//       <div className="App">
//         <h1>Say hello React app</h1>
//         <button onClick={clickButton}>Click</button>
//         <Person 
//           name={personState.person[0].name} 
//           age={personState.person[0].age}
//           click={onClickPerson}/>
//         <Person 
//           name={personState.person[1].name} 
//           age={personState.person[1].age}
//           click={onClickPerson}>Person tag</Person>
//         <Person 
//           name={personState.person[2].name} 
//           age={personState.person[2].age}
//           click={onClickPerson}/>
//         <Hello name="Computer">children of Hello</Hello>
//       </div>
//     );
// }
 
export default App;
