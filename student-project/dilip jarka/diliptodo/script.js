const taskInput = document.getElementById("task");
const dateTimeInput = document.getElementById("dt");
const addButton = document.getElementById("btn");
const todoList = document.getElementById("todo-list");

const STORAGE_KEY = "todos";

function getTodos() {
    const rawTodos = localStorage.getItem(STORAGE_KEY);
    return rawTodos ? JSON.parse(rawTodos) : [];
}

function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function renderTodo(todo) {
    const li = document.createElement("li");
    li.dataset.id = String(todo.id);
    li.innerHTML = `
        <span>
            <strong>${todo.task}</strong><br>
            <small>${todo.dateTime}</small>
        </span>
        <button class="delete-btn">❌</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        const todos = getTodos().filter(function (item) {
            return String(item.id) !== li.dataset.id;
        });
        saveTodos(todos);
        li.remove();
    });

    todoList.appendChild(li);
}



addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();
    const dateTime = dateTimeInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const todos = getTodos();
    const newTodo = {
        id: Date.now(),
        task: task,
        dateTime: dateTime
    };

    todos.push(newTodo);
    saveTodos(todos);
    renderTodo(newTodo);

    taskInput.value = "";
    dateTimeInput.value = "";
});
document.addEventListener("DOMContentLoaded", function () {
    const todos = getTodos();
    todos.forEach(function (todo) {
        renderTodo(todo);
    });
});

//