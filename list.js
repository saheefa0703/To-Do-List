let tasks = [];

function renderTasks() {
  const tasksContainer = document.getElementById('tasksContainer');
  tasksContainer.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.className = `task ${task.completed ? 'completed' : ''}`;
    taskElement.innerHTML = `
      <div>
        <input type="checkbox" onclick="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
        <span>${task.title}</span>
        <p>${task.description}</p>
      </div>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    tasksContainer.appendChild(taskElement);
  });
}

function addTask() {
  const title = document.getElementById('taskTitle').value;
  const description = document.getElementById('taskDescription').value;

  if (title.trim() !== '') {
    tasks.push({ title, description, completed: false });
    renderTasks();
    clearInputs();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function editTask(index) {
  const newTitle = prompt('Enter new title:', tasks[index].title);
  const newDescription = prompt('Enter new description:', tasks[index].description);

  if (newTitle !== null) {
    tasks[index].title = newTitle;
    tasks[index].description = newDescription || '';
    renderTasks();
  }
}

function deleteTask(index) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');

  if (confirmDelete) {
    tasks.splice(index, 1);
    renderTasks();
  }
}

function clearInputs() {
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
}

// Initial rendering
renderTasks();