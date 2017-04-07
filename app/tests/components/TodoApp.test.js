import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

import {configure} from 'configureStore';

describe('TodoApp', () => {
  it('Should exists', ()=>{
    expect(TodoApp).toExist();
  });

  it('Should render todolist', () => {
    let store = configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
