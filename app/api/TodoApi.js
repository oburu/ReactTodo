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
  },
  filterTodos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;

    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });


    //sort todos with non-compelted first
    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
}
