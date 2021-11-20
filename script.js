var form = document.getElementById('form');
var input = document.getElementById('input');
var todosUl = document.getElementById('todos');

var todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
  todos.forEach(todo => {
    addTodo(todo)
  });

}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  var todoText = input.value;
  if(todo) {
    todoText = todo.text;
    }

    var todoText = input.value;

    if(todoText) {
      var todoEl = document.createElement('li');
      if(todo && todo.completed) {
      todoEl.classList.add('complted');
      }
      todoEl.innerText = todoText;

      todoEl.addEventListener('click', () => {
        todoEl.classList.toggle('completed');

        updateLS();
      });

      todoEl.addEventListener('contextmenu', (e) => {
        e.preventDefault();

        todoEl.remove();

        updateLS();
      });

      todosUl.appendChild(todoEl);

      input.value = "";

      updateLS();
    }





}

function updateLS() {
  var todosEl = document.querySelectorAll('li');

  var todos = [];

  todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

  localStorage.setItem("todos", JSON.stringify(todos));
}
