import React, {Component} from 'react';
import moment from 'moment';

class TodoItem extends Component{
  render(){
    let {text, id, completed, createdAt, completedAt} = this.props;

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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed} />
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    )
  }
}

export default TodoItem;
