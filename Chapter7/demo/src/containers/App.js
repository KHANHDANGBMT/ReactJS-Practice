import React, { Component } from 'react';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: '123', name: 'khanhdang', age: 99 },
        { id: '345', name: 'luongle', age: 100 },
        { id: '987', name: 'nhuy', age: 89 },
        { id: '652k', name: 'pluto', age: 92 }
      ],
      showPersons: false,
      showCockpit: true
    }
  }
  // state = {
  //   persons: [
  //     { id: '123', name: 'khanhdang', age: 99 },
  //     { id: '345', name: 'luongle', age: 100 },
  //     { id: '987', name: 'nhuy', age: 89 },
  //     { id: '652k', name: 'pluto', age: 92 }
  //   ],
  //   showPersons: false
  // }
  static getDerivedStateFromProps (props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return {data: true};
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
    console.log(this.state);
  }
  shouldComponentUpdate(){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  toggleShowPersons = () => {
    const currentShowPersons = this.state.showPersons;
    this.setState({
      showPersons: !currentShowPersons
    })
  }

  changedNamePerson = (event, id) => {
    const indexPerson = this.state.persons.findIndex(element => {
      return element.id === id;
    });
    const person = this.state.persons[indexPerson];
    person.name = event.target.value;

    
      const persons = [...this.state.persons];
      persons[indexPerson] = person;
  
      this.setState({
        persons: persons
      })
    
  }

  removePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    })
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
          <Persons
              persons={this.state.persons}
              clicked={this.removePerson}
              changed={this.changedNamePerson}
            ></Persons>
          }
        </div>);
    }
    return (
      <div className="App">
        <button onClick={()=>{
          this.setState({showCockpit: false});
        }}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.toggleShowPersons}
        ></Cockpit> : null}
        
        
        {persons}
      </div>
    );
  }
}

export default App;
