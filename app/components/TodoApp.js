import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'node-uuid';// this is a mpdeule to generate an unique id, noice.

class TodoApp extends Component{
  constructor(props) {
    super(props);

    //harcoded object for test
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [{
        id:uuid(),
        text: 'walk the dog'
      },{
        id:uuid(),
        text: 'walk the dog'
      },{
        id:uuid(),
        text: 'walk the cat'
      },{
        id:uuid(),
        text: 'do the doing'
      }]
    };
  }

  handleAddTodo(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }

      ]
    });
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let {todos} = this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={todos}/>
        <AddTodo onAdding={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
