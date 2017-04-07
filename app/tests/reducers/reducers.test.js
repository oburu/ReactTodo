import expect from 'expect';
import df from 'deep-freeze-strict';
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it ('Should set searchText', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'perro'
      }
      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it ('Should toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it ('Should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'walk the doogg'
      }
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it ('Should toggle todo', () => {
      let todos = [{
        id: '123',
        text: 'something',
        completed: true,
        createdAt: 123,
        completedAt:125
      }];
      let action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }
      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });

    it ('Should add existing todos', () => {
      let todos = [{
        id:111,
        text:'do something',
        completed: false,
        completedAt: undefined,
        createdAt: 5500
      }];
      let action = {
        type: 'ADD_TODOS',
        todos
      }
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);

    });
  });
});
