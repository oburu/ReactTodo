import expect from 'expect';
import TodoApi from 'TodoApi';

describe('TodoApi',() => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('Should exits',() => {
    expect(TodoApi).toExist();
  });

  describe('Set todos', () => {
    it('Should set valid todos array', () =>{
      let todos = [{
        id:23,
        text:'test all files',
        copleted: false
      }];
      TodoApi.setTodos(todos);

      let actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      let badTodos = {a:'b'};//bad data, not an array
      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('Get todos', () => {
    it('Should return empty array for bad localStorage data', () =>{
      let actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('Should return todos if valid array in localStorage', () =>{
      let todos = [{
        id:23,
        text:'test all files',
        copleted: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      let actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    });

  });
});
