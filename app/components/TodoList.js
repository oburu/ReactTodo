import React, {Component} from 'react';
import TodoItem from 'TodoItem';

class TodoList extends Component{
  render(){
    let {todos} = this.props;
    const renderTodos = () => {
      if(todos.length === 0){
        return(
          <p className='container__message'>Nothing to Do</p>
        );
      }
      
      return todos.map((todo)=>{
        return (
          <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />//the spread operator is KEY!!
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

export default TodoList;
