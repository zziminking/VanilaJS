const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = todoForm.querySelector('input');

const toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const saveTodo = todoInput.value;
    todoInput.value = "";
    toDos.push(saveTodo);
    paintTodo(saveTodo);
    saveToDos();
}

function deleteTodo(event) {
    const targetLi = event.target.parentElement;
    targetLi.remove();
}


function paintTodo(a) {
    const firstLi = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteTodo);
    firstLi.append(span);
    firstLi.append(button);
    span.innerText = a;
    todoList.append(firstLi);
}


todoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
console.log(savedTodos)

if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    parseTodos.forEach((item) => console.log('this is parameters', item));
}