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
});
