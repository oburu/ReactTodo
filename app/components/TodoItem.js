import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

var actions = require('actions');

export class TodoItem extends Component{
  render(){
    let {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }

    return(
      <div className={todoClassName} onClick={() => {
          dispatch(actions.toggleTodo(id));
        }}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    )
  }
}

export default connect()(TodoItem);
