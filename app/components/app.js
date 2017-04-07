import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import TodoAPI from 'TodoApi';

let actions = require('actions') ;
let store = require('configureStore').configure();

store.subscribe( () => {
  let state = store.getState();
  console.log('New State', state);

  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

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
