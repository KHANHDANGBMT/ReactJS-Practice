import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import counter from './store/reducer/counter';
import result from './store/reducer/result';


const rootReducer = combineReducers({
  ctr: counter,
  res: result
});

const logger = store => {
  return next => {
      return actionff => {
          console.log("[Middleware] Dispatching", actionff);
          const result = next (actionff);
          
          console.log("[Middleware] Next state", store.getState());
          console.log(result);
          return result;
      }
  }
}


const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
