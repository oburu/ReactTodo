import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {Provider} from 'react-redux';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodoItem, {TodoItem} from 'TodoItem';

import {configure} from 'configureStore';

describe('TodoList', () => {
  it('Should exists', ()=>{
    expect(TodoList).toExist();
  });

  it('Should render one todo component for each todo item', () => {
    let todos=[{
      id:1,
      text:'do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },{
      id:2,
      text:'do another thing',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    let store = configure({
      todos
    });

    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList />
      </Provider>
    );

    let todolist = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList )[0];
    let todoComponents = TestUtils.scryRenderedComponentsWithType(todolist, ConnectedTodoItem);

    expect(todoComponents.length).toBe(todos.length);//in this case, 2 equal 2
  });

  it('Should render empty message if no todos', () => {
    let todos=[];
    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    let $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });

});
