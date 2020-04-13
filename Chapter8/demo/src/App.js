import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './Auth/auth';
import Logout from './Auth/logout/logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncOrders = asyncComponent ( () => {
  return import('./containers/Orders/Orders');
});

const asyncCheckout = asyncComponent ( () => {
  return import('./containers/Checkout/Checkout');
});

const asyncContainer= asyncComponent ( () => {
  return import('./containers/BurgerBuilder/BurgerBuilder');
});

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={asyncContainer} />
        <Redirect to="/"/>
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path="/checkout" component={asyncCheckout} />
            <Route path="/orders" component={asyncOrders} />
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={Auth} />
            <Route path="/" exact component={asyncContainer} />
            <Redirect to="/"/>
          </Switch>
      )
    }
    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
