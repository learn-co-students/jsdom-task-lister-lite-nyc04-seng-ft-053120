document.addEventListener("DOMContentLoaded", () => {

  // query for the task form
  const taskForm = document.querySelector("#create-task-form");

  // query for the to do list
  const toDoList = document.querySelector("#list #tasks");

  // add event listener to the task form on submission
  taskForm.addEventListener("submit", function(e) {
    // prevent the default (get request to the same page)
    e.preventDefault();

    // take the event's target of new task description, get its value and assign to var
    let user_input = e.target["new-task-description"].value

    // if the input is not "", then add the input to the todo list
    if (user_input.length > 0) {
      addToTodos(user_input);
    }

    // reset the task form, erasing the input user just entered
    taskForm.reset();
  })

  // function to take a string and add on to the to do list
  function addToTodos(str) {

    // make a new div 
    let newDiv = document.createElement("div")
    // smack the newDiv onto toDolist
    toDoList.append(newDiv)
    newDiv.className="list-div";

    // create a new li and put into it the str, and make it a child of newDiv
    let newItemLi = document.createElement("li");
    newItemLi.innerHTML = str;
    newDiv.append(newItemLi);

    // create a delete button, making it a child of the newDiv
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    newDiv.append(deleteBtn);
    deleteBtn.className="delete"

    // when button is clicked, then delete the div
    deleteBtn.addEventListener("click", function(e) {
      deleteBtn.parentElement.remove();
    });

    // when the Li is clicked, render a form that user can edit, submission of this form changes the li's innerHTML value
    newItemLi.addEventListener("click",function(e){
      if (!newItemLi.innerHTML.includes("<form>")) {
        newItemLi.innerHTML = `<form><input type='text' id="new" value="${newItemLi.innerHTML}"></form>`;

        newItemLi.addEventListener("submit", function(e) {
          e.preventDefault;
          let changed_input = e.target["new"].value
          if (changed_input.length > 0) {
            newItemLi.innerHTML = changed_input
          }
        })
      }
    })
  }
});