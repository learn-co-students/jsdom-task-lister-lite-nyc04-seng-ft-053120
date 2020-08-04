document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // user Chrome Dev tools to find form choose create-task-form 
  const newTaskForm = document.querySelector("#create-task-form")
// find the where you want to create the list of user inputs, found open ul with id of "#tasks"
  const myToDos = document.querySelector("#tasks")
// create an addEventListener that is triggered by a button that belongs to the form that was found earlier in newTaskForm
newTaskForm.addEventListener("submit", function(evt){
  // added to prevent.Default() so the normal action of hitting the submit button would not take place 
  evt.preventDefault()
  // now we store the event value from the text box into a variable
  let userInput = evt.target["new-task-description"].value
// create a new blank slate from the supply closet
  let newListItem = document.createElement("li")
  // access the inner text of created blank ele and assign it the user text input value
  newListItem.innerText = userInput
  // now add the userInput stored above to the new empty li stored in newListItem
  myToDos.append(newListItem)
// Next we create a new button to delete each task 
let deleteTaskButton = document.createElement("button")
// assign a value for the inner text of the button
deleteTaskButton.innerText = "❌" 
// add new task button to each create li being newListItem 
newListItem.append(deleteTaskButton)
// add new list item to the task list myToDos
myToDos.append(newListItem)
// create an event listener to check if button was clicked on
deleteTaskButton.addEventListener("click", function(evt){
  // if button was clicked on remove
  newListItem.remove()
}) 
})
// Now we want to create a button that deletes all tasks so first we create a new element button
let deleteAllTasks = document.createElement("button")
// we then create the inner text for the button 
deleteAllTasks.innerText ="DELETE ALL"
// we add the button to the mytodos ("#tasks") is of the html
myToDos.append(deleteAllTasks)
// create an eventListener that once clicked assigns all values in myTodo to an empty string. What Eric calls "cheap and dirty, but it works"
deleteAllTasks.addEventListener("click", function(evt){
  myToDos.innerHTML = ""
})
});