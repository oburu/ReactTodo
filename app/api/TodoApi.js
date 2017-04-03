import $ from 'jQuery';

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){//return true or false if is array
      localStorage.setItem('todos', JSON.stringify(todos));// localStorage solo almacena strings, por eso lo de JSON.stringify
      return todos;// if it's wrong data, undefined is return by default
    }
  },
  getTodos: function(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {

    }

    return $.isArray(todos) ? todos : [];
  }
}
