import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoList from 'TodoList';
import TodoItem from 'TodoItem';

describe('TodoList', () => {
  it('Should exists', ()=>{
    expect(TodoList).toExist();
  });

  it('Should render one todo component for each todo item', () => {
    let todos=[{
      id:1,
      text:'do something'
    },{
      id:2,
      text:'do another thing'
    }];
    let todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    let todoComponents = TestUtils.scryRenderedComponentsWithType(todolist, TodoItem);

    expect(todoComponents.length).toBe(todos.length);//in this case, 2 equal 2
  });

  it('Should render empty message if no todos', () => {
    let todos=[];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    let $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });

});
