import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <BurgerBuilder></BurgerBuilder>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
