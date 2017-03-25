import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import TodoItem from 'TodoItem';

describe('TodoItem', () => {
  it('Should exists', ()=>{
    expect(TodoItem).toExist();
  });
});
