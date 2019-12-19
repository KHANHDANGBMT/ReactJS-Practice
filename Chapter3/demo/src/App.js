import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Hello from './Person/Class';

class App extends Component {
  state ={
    person:[
      {name:"Luong", age: 18},
      {name:"Khanh", age: 12},
      {name:"Huong", age: 11},
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>Say hello React app</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>Person tag</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <Hello name="Computer">children of Hello</Hello>
      </div>
    );
  }
  //return React.createElement("div",{className:"App"}, React.createElement('h1',null,'Say hello react app222',));
}

export default App;
