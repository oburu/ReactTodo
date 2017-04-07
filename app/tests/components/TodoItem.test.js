import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {TodoItem} from 'TodoItem';

describe('TodoItem', () => {
  it('Should exists', ()=>{
    expect(TodoItem).toExist();
  });

  it('Should dispatch TOGGLE_TODO action onClick', () => {
    let todoData = {
      id: 199,
      text: 'Test features',
      completed: true
    }
    let spy = expect.createSpy();
    let todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} dispatch={spy} />);

    let $el = $(ReactDOM.findDOMNode(todoItem));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });

  });
});
