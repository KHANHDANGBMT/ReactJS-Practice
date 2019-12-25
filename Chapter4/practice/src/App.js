import React, { Component } from 'react';
import Validation from './Validation/Validation'
import './App.css';
import './Char/Char'
import Char from './Char/Char';

class App extends Component {
  state = {
    content: 'hi'
  }

  changedContent = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  deleteCharHandle = (index) => {
    const arrText = this.state.content.split('');
    arrText.splice(index, 1);
    const updateText = arrText.join('');
    this.setState({
      content: updateText
    })
  }

  render() {
    let charList = this.state.content.split('').map((ch, index) => {
      return (
        <Char
          value={ch}
          id={index}
          clicked={() => this.deleteCharHandle(index)}
        />
      );
    });

    return (
      <div className="App">
        <input
          onChange={this.changedContent}
          value={this.state.content}
        ></input>
        <p>{this.state.content}</p>
        <Validation length={this.state.content.length} />

        {charList}
      </div>
    );
  }

}

export default App;
