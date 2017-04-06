import expect from 'expect';
var actions = require('actions');

describe('Actions', () => {
  it('Should generate searchText action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some text'
    }
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('Should generate toggle showCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('Should generate addtodo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'thing todo'
    }
    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
