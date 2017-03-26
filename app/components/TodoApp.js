import React, {Component} from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

class TodoApp extends Component{
  constructor(props) {
    super(props);

    //harcoded object for test
    this.state = {
      showCompleted: false,
      searchText: '',
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
