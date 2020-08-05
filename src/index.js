const createTaskForm = document.querySelector('#create-task-form');
const tasks = document.querySelector('#tasks');
const sortByPriorityButton = document.querySelector('#sort');

// create new task with delete button

function createTask(newTaskInput, newTaskAttributes) {
  let task = document.createElement('li');
  task.innerText = newTaskInput;
  task.classList.add(newTaskAttributes[priority]);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';

  let editButton = document.createElement('button');
  editButton.innerText = 'edit';

  task.append(editButton);
  task.append(deleteButton);
  tasks.append(task);

  editButton.addEventListener('click', function(e) {
    editForm = document.createElement('form');
    editForm.innerHTML = "<label for='new-task-description'>Task description:</label><br><input type='text' id='new-task-description' name='new-task-description' placeholder='description'><br><label for='priority'>Priority:</label><br><select name='priority' id='priority'><option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option></select><br><input type='submit' value='Edit Task'><br>";
    task.append(editForm)
  });

  deleteButton.addEventListener('click', function(e) {
    task.remove();
  });
};

// submit event to create task

createTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let newTaskInput = (e.target['new-task-description'].value),
      newTaskAttributes = {priority : e.target['priority'].value,
                           user : e.target['user'].value,
                           duration : e.target['duration'].value,
                           duedate : e.target['duedate'].value}
  createTask(newTaskInput, newTaskAttributes);
});

// click event to sort

sortByPriorityButton.addEventListener('click', function(e) {
  sortPriority(tasks).forEach(task => {tasks.append(task)})
});

// custom sort function

function sortPriority(tasks) {
  return Array.from(tasks.children).sort(function(task1, task2) {
    if (task1.className === task2.className) {
      return 0;
    }
    if (task1.className === "high" || (task1.className === "medium" && task2.className === "low")) {
      return 1;
    }
    return -1;
  }).reverse();
}