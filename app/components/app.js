import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';

let actions = require('actions') ;
let store = require('configureStore').configure();

store.subscribe( ()=> {
  console.log('New State', store.getState());
});

// load foundation
$(document).foundation();

// App scss (applicationStyles is set in webpack.config.js)
require('style!css!sass!applicationStyles');

class App extends Component{
  render() {
    return(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
