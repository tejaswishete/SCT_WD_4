const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const taskList = document.getElementById('taskList');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = taskInput.value;
    const taskDate = taskDateTime.value;

    if (taskText && taskDate) {
        addTask(taskText, taskDate);
        taskInput.value = '';
        taskDateTime.value = '';
    }
});

// Function to add a task
function addTask(taskText, taskDate) {
    const li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText} (Due: ${new Date(taskDate).toLocaleString()})</span>
        <div>
            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Event listeners for buttons
    li.querySelector('.edit').addEventListener('click', () => editTask(li, taskText, taskDate));
    li.querySelector('.complete').addEventListener('click', () => completeTask(li));
    li.querySelector('.delete').addEventListener('click', () => deleteTask(li));

    taskList.appendChild(li);
}

// Function to edit a task
function editTask(li, taskText, taskDate) {
    const newTaskText = prompt('Edit your task', taskText);
    const newTaskDate = prompt('Edit date and time', taskDate);

    if (newTaskText !== null && newTaskDate !== null) {
        li.querySelector('span').textContent = `${newTaskText} (Due: ${new Date(newTaskDate).toLocaleString()})`;
    }
}

// Function to mark a task as complete
function completeTask(li) {
    li.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(li) {
    taskList.removeChild(li);
}
