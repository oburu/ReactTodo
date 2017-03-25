import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

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

  handleAddTodo(text){
    alert('new todo: '+ text);
  }

  render() {
    let {todos} = this.state;
    return(
      <div>
        <h3>TodoApp js</h3>
        <TodoList todos={todos}/>
        <AddTodo onAdding={this.handleAddTodo}/>
      </div>
    )
  }
}

export default TodoApp;
