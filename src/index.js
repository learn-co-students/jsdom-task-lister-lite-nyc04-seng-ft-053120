document.addEventListener("DOMContentLoaded", () => {  //calling entire document //DOMcont.. makes sure the whole doc is loaded
  // VARIABLES to get access to specific parts in the document
  const newTaskForm = document.getElementById("create-task-form") //gets form from index.html file 
  const myToDos = document.getElementById("tasks") // 

  newTaskForm.addEventListener("submit", function(evt) { //events happening, 
    evt.preventDefault()     
                               // prevents the page from refreshing
    let userInput =  evt.target["new-task-description"].value // create var for the value of evt, accesing input 

    //adding it to the DOM so we can SEE it! 
    let blankListItem = document.createElement("li")
    blankListItem.innerText = userInput  //equalliyng it to the usersinput
    myToDos.append(blankListItem) // appending usersinput(li) to out to dos list 

    let blankButton = document.createElement("button") //create button
    blankButton.innerText = "x"    // assign what we see in the button, could be anything, nothing happens yet until you create an event for it
    blankListItem.append(blankButton)  
    myToDos.append(blankListItem)

    blankButton.addEventListener("click", function(evt){  //adding event for button, which will be remove
      blankListItem.remove()       // this will happen after the event
    })

  })
  // this entire function occurs when we click submit
  //this fn below needs to be outside, so we are not creating a delete button 
  //everytime you click a submit button
  let removeAllButton = document.createElement("button")
  removeAllButton.innerText = "DELETE ALL"

  myToDos.append(removeAllButton)

  removeAllButton.addEventListener("click", function(evt){
    myToDos.innerHTML = ""
  })

});


















// document.addEventListener("DOMContentLoaded", () => {
//   // initialize taskList class
//   const taskList = new TaskList();
//   //grab all the necessary DOM elements

//   //form and relevant input fields
//   const newTaskForm = document.getElementById("create-task-form");
//   const newTaskDescription = document.getElementById("new-task-description");
//   const newTaskPriority = document.getElementById("new-task-priority");

//   //ul where new tasks will live on the DOM
//   const taskUl = document.getElementById("tasks");

//   const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
//   //attach event listeners

//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     taskList.createNewTask(newTaskDescription.value);
//     // reset form
//     e.target.reset();
//     renderApp();
//   });

//   taskUl.addEventListener("click", (e) => {
//     if (e.target.nodeName === "BUTTON") {
//       taskList.deleteTask(e.target.dataset.description);
//       renderApp();
//     }
//   });
// });