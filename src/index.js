document.addEventListener("DOMContentLoaded", () => {
  const formEl = document.querySelector('#create-task-form');

  formEl.addEventListener("submit", createTask);
});

function createTask(event) {
  event.preventDefault();

  const taskName = document.querySelector('#new-task-description').value;
  const priorityOption = document.querySelector('#priority-select');
  const selectedOption = priorityOption[priorityOption.selectedIndex];

  const newTask = craeteTaskLi(taskName, selectedOption);
  const delButton = createDelButton(taskName);

  newTask.append(delButton);
  addTaskLi(newTask);

  event.target.reset();
};

function craeteTaskLi(taskName, priorityOption) {
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