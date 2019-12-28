import React, { Component } from 'react';
import './App.css';
// Radium
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'khanhsdl', name: 'jack', age: 11 },
      { id: 'ttt', name: 'k-icm', age: 11 },
      { id: 'khanh3331sdl', name: 'luong', age: 11 },
      { id: 'oai', name: 'khanh', age: 11 },
    ],
    showPersons: false
  }

  // toggle showPerson
  togglePersonsHandle = () => {
    const currentShowPerson = this.state.showPersons;
    this.setState({ showPersons: !currentShowPerson });
  }
  // delete person
  deletePerson = (index) => {
    let personsArr = this.state.persons;
    personsArr.splice(index, 1);
    this.setState({
      persons: personsArr
    });
  }
  //update person onChange
  changedPersonName = (event, id) => {
    console.log(event);
    const personIndex = this.state.persons.findIndex(element => {
      return element.id === id;
    });
    const person = this.state.persons[personIndex];
    person.name = event.target.value;
    const persons1 = [...this.state.persons];
    persons1[personIndex] = person;
    this.setState({
      persons: persons1
    })
  }
  render() {
    // Style button 
    const button = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      color: 'white',
      fontWeight: 'bold',
      // Radium
      // ':hover': {
      //   color: 'green',
      //   backgroundColor: 'lightblue'
      // }
    };

    let personList = null;
    if (this.state.showPersons) {
      console.log('run2');
      personList = (
        <div>
          {
            this.state.persons.map((element, index) => {
              return ( <ErrorBoundary> <Person
                name={element.name}
                age={element.age}
                click={() => this.deletePerson(index)}
                changed={(event) => this.changedPersonName(event, element.id)}
                key={element.id}
                currentName = {element.name}
              >Person tag</Person></ErrorBoundary>);
            })
          }
        </div>
      );
      // Radium
      // button.color = 'pink';
      // button[':hover'] = {
      //   color: 'red',
      //   backgroundColor: 'lightgray'
      // }
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      // Radium
      // <StyleRoot>
        <div className="App">
          <h1 >Hello React App</h1>
          <p className={classes.join(' ')}> This paragraph can be changed color</p>
          <button style={button} onClick={this.togglePersonsHandle}>Toggle person</button>
          {personList}
        </div>
      // </StyleRoot>
    );

  };
}
// Radium 
// export default Radium(App);
export default App;