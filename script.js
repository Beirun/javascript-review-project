// Todo CRUD Management

let todoList = [];

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoListContainer = document.getElementById('todo-list');



const addTodo = (event) => {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todoList.push(todoText);
        todoInput.value = '';
        renderTodoList();
    }
};

const editTodo = (index) => {
    const newTodoText = prompt(`Edit todo #${index+1}`, todoList[index]);
    if (newTodoText !== null) {
        todoList[index] = newTodoText;
        renderTodoList();
    }
};

const deleteTodo = (index) => {
    const confirmed = confirm(`Are you sure you want to delete this todo?`);
    if (confirmed) {
        todoList.splice(index, 1);
        renderTodoList();
    }
};

const renderTodoList = () => {
    todoListContainer.innerHTML = '';
    todoList.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        const todoText = document.createElement('span');
        todoText.textContent = todo;

        const todoButtons = document.createElement('div');
        todoButtons.classList.add('todo-buttons');
        todoButtons.innerHTML = `
            <button class="edit-button" onclick="editTodo(${index})">Edit</button>
            <button class="delete-button" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoItem.appendChild(todoText);
        todoItem.appendChild(todoButtons);
        todoListContainer.appendChild(todoItem);
    });
};

todoForm.addEventListener('submit', addTodo);

renderTodoList();