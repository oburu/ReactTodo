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
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch.bind(this)} />
              <TodoList />
              <AddTodo onAdding={this.handleAddTodo.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoApp;
