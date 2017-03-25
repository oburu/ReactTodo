import React, {Component} from 'react';
import TodoList from 'TodoList';

class TodoApp extends Component{
  constructor(props) {
    super(props);

    //harcoded object for test
    this.state = {
      todos: [{
        id:1,
        text: 'walk the dog'
      },{
        id:2,
        text: 'walk the dog'
      },{
        id:3,
        text: 'walk the cat'
      },{
        id:4,
        text: 'do the doing'
      }]
    };
  }

  render() {
    let {todos} = this.state;
    return(
      <div>
        <h3>TodoApp js</h3>
        <TodoList todos={todos}/>
      </div>
    )
  }
}

export default TodoApp;
