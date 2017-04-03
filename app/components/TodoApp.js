import React, {Component} from 'react';
import uuid from 'node-uuid';// this is a modeule to generate an unique id, noooooice!
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoApi from 'TodoApi';

class TodoApp extends Component{
  constructor(props) {
    super(props);

    //harcoded object for test
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoApi.getTodos()
    };
  }

  componentDidUpdate(){
    TodoApi.setTodos(this.state.todos);
  }

  handleAddTodo(text){
    this.setState({
      todos:[
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt:moment().unix(),
          completedAt: undefined
        }

      ]
    });
  }

  handleToggle(id){
    let updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos
    })
  }

  handleSearch(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let {todos, showCompleted, searchText } = this.state;
    let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)}/>
        <AddTodo onAdding={this.handleAddTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
