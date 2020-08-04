const createTaskForm = document.querySelector('#create-task-form');
const tasks = document.querySelector('#tasks');
const sortByPriorityButton = document.querySelector('#sort');

// create new task with delete button

function createTask(newTaskInput, newTaskPriority) {
  let task = document.createElement('li');
  task.innerText = newTaskInput;
  task.classList.add(newTaskPriority);

  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'x'

  task.append(deleteButton);
  tasks.append(task);

  deleteButton.addEventListener('click', function(e) {
    task.remove();
  });
};

// submit event to create task

createTaskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let newTaskInput = (e.target['new-task-description'].value),
      newTaskPriority = (e.target['priority'].value);
  createTask(newTaskInput, newTaskPriority);
});

// click event to sort

sortByPriorityButton.addEventListener('click', function(e) {
  sortPriority(tasks).forEach(task => {tasks.append(task)})
});

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