import React, {Component} from 'react';

class TodoItem extends Component{
  render(){
    let {text, id} = this.props;
    return(
      <li>{id}. {text}</li>
    )
  }
}

export default TodoItem;
