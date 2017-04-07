import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {AddTodo} from 'AddTodo';

describe('AddTodo', () => {
  it('Should exists', ()=>{
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () =>{
    let todoText = 'hello you';
    let action = {
      type: 'ADD_TODO',
      text: todoText
    };
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should NOT dispatch ADD_TODO when invalid todo text', () =>{
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value ='';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });


});
