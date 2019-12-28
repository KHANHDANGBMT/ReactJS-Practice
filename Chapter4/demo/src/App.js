import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    person: [
      { id: 'i1u', name: "Luong", age: 18 },
      { id: 'p1po2', name: "Khanh", age: 12 },
      { id: 'k1k23l', name: "Huong", age: 11 },
    ],
    showPerson: false
  };

  // toggle showPerson
  togglePersonsHandle = () => {
    const currentShowPerson = this.state.showPerson;
    this.setState({ showPerson: !currentShowPerson });
  }

  // delete person
  deletePersonHandler = (index) => {
    //let persons = this.state.person.splice();
    const persons = [...this.state.person];
    persons.splice(index, 1);
    this.setState({ person: persons });
  }

  // changed name
  nameChangedHandle = (event, id) => {
    const personIndex = this.state.person.findIndex(element => {
      return element.id === id;
    });
    const person = this.state.person[personIndex];
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({
      person: persons
    })
  }

  render() {
    // Style button 
    const button = {
      backgroundColor: 'gray',
      font: 'inherit',
      border: '1px solid green',
      padding: '8px'
    };

    // handle dynamic content
    let persons = null;
    if (this.state.showPerson) {
      console.log('run1');
      persons = (
        <div>
          {
            this.state.person.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                currentName={person.name}
                key={person.id}
                changed={(event) => { this.nameChangedHandle(event, person.id) }}
              >Person tag</Person>;
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Say hello React app</h1>
        <button onClick={this.togglePersonsHandle} style={button}>Click</button>
        {persons}
      </div>
    );
  }
}

export default App;
