import React, { Component } from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './main';

// load foundation
$(document).foundation();

// App scss (applicationStyles is set in webpack.config.js)
require('style!css!sass!applicationStyles');

class App extends Component{
  render() {
    return(
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
      </Router>
    );
  }
}

export default App;
