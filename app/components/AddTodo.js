import React, {Component} from 'react';

class AddTodo extends Component{

  onHandleSubmit(e){
    e.preventDefault();
    let text = this.refs.todoText.value;

    if (text.length > 0){
      this.refs.todoText.value = '';
      this.props.onAdding(text);
    }else {
      this.refs.todoText.focus();
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onHandleSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you want to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
