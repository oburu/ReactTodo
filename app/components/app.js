import React, { Component } from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';

// load foundation
$(document).foundation();

// App scss (applicationStyles is set in webpack.config.js)
require('style!css!sass!applicationStyles');

class App extends Component{
  render() {
    return(
      <TodoApp />
    );
  }
}

export default App;
