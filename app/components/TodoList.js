import React, {Component} from 'react';
import TodoItem from 'TodoItem';

class TodoList extends Component{
  render(){
    let {todos} = this.props;
    const renderTodos = () => {
      return todos.map((todo)=>{
        return (
          <TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle} />//the spread operator is KEY!!
        )
      });
    }
    return(
      <div>
        Test
        <ul>
          {renderTodos()}
        </ul>
      </div>
    )
  }
}

export default TodoList;
