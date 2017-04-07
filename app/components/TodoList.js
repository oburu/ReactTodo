import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoItem from 'TodoItem';
import TodoAPI from 'TodoApi';

export class TodoList extends Component{
  render(){
    let {todos, showCompleted, searchText} = this.props;
    const renderTodos = () => {
      if(todos.length === 0){
        return(
          <p className='container__message'>Nothing to Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
        return (
          <TodoItem key={todo.id} {...todo} />//the spread operator is KEY!!
        )
      });
    }
    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
