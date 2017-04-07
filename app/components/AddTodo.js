import React, {Component} from 'react';
import {connect} from 'react-redux';

let actions = require('actions');

export class AddTodo extends Component{

  onHandleSubmit(e){
    e.preventDefault();
    let {dispatch} = this.props;
    let todoText = this.refs.todoText.value;

    if (todoText.length > 0){
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  }

  render(){
    return(
      <div className="container__footer">
        <form onSubmit={this.onHandleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you want to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);
