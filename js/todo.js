const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const todoInput = todoForm.querySelector('input');

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const saveTodo = todoInput.value;
    todoInput.value = "";
    const newTodos = {
        text: saveTodo,
        id: Date.now()
    }
    toDos.push(newTodos);
    paintTodo(newTodos);
    saveToDos();
}

function deleteTodo(event) {
    const targetLi = event.target.parentElement;
    console.log(targetLi.id);
    targetLi.remove();
}


function paintTodo(a) {
    const firstLi = document.createElement('li');
    firstLi.id = a.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'X';
    button.addEventListener('click', deleteTodo);
    firstLi.append(span);
    firstLi.append(button);
    span.innerText = a.text;
    todoList.append(firstLi);
}


todoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos;
    parseTodos.forEach(paintTodo);
}