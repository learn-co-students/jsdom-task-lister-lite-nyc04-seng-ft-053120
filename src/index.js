document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.querySelector('#create-task-form');
  const sortTaskForm = document.querySelector('#sort-tasks');
  createTaskForm.addEventListener("submit", createTask);
  sortTaskForm.addEventListener("submit", sortTasks);
});

function createTask(event) {
  event.preventDefault();

  const taskName = document.querySelector('#new-task-description').value;
  const priorityOption = document.querySelector('#priority-select');
  const selectedOption = priorityOption[priorityOption.selectedIndex];

  const newTask = createTaskLi(taskName, selectedOption);
  const delButton = createDelButton(taskName);

  newTask.append(delButton);
  addTaskLi(newTask);

  event.target.reset();
};

function createTaskLi(taskName, priorityOption) {
  const newTask = document.createElement('li');
  newTask.innerText = taskName
  newTask.style.backgroundColor = priorityOption.dataset['color'];
  newTask.dataset['priority'] = priorityOption.dataset['priority'];
  return newTask
}

function createDelButton(taskName) {
  const button = document.createElement('button');
  button.innerText = "X";
  button.dataset['desc'] = taskName;
  button.addEventListener('click', removeParentEl);
  return button;
}

function addTaskLi(taskLi) {
  const todoUl = document.querySelector('#tasks');
  todoUl.append(taskLi);
}

function removeParentEl(event) {
  event.target.parentElement.remove();
}

function sortTasks(e) {
  e.preventDefault();
  const tasksUl = document.querySelector('ul#tasks');
  const selectEl = document.querySelector('#sort-select');
  const option = selectEl.options[selectEl.selectedIndex].value;
  let tasks = getTaskLists();

  if (option == "asc") {
    tasks = tasks.sort(tasksSortAsc);
  } else {
    tasks = tasks.sort(tasksSortDsc);
  }

  tasksUl.innerHTML = "";
  tasks.forEach(li => tasksUl.appendChild(li));
}

function getTaskLists() {
  return Array.from(document.querySelectorAll('ul#tasks li'));
}

function tasksSortDsc(elOne, elTwo) {
  if (elOne.dataset["priority"] > elTwo.dataset["priority"]) {
    return 1;
  } else if (elOne.dataset["priority"] < elTwo.dataset["priority"]) {
    return -1;
  }
  return 0;
}

function tasksSortAsc(elOne, elTwo) {
  if (elOne.dataset["priority"] > elTwo.dataset["priority"]) {
    return -1;
  } else if (elOne.dataset["priority"] < elTwo.dataset["priority"]) {
    return 1;
  }
  return 0;
}