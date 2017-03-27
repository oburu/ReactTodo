import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {
  it('Should exists', ()=>{
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state on handleAddTodo', () => {
    let todoText = 'test todo';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({ todos: [] });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

  });

  it('Should handle toggle completed value when HandleToggle is called',() => {
    let todoData = {
      id: 3,
      text: 'Test features',
      completed: false
    }

    let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(3)
    expect(todoApp.state.todos[0].completed).toBe(true);

  });
});
