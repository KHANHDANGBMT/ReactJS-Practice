import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Say hello React app</h1>
      <Person/>
    </div>
  );
  //return React.createElement("div",{className:"App"}, React.createElement('h1',null,'Say hello react app222',));
}

export default App;
