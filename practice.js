document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const newTaskForm = document.getElementById("create-task-form") //gets form from index.html file 
    const myToDos = document.getElementById("tasks")
    
    newTaskForm.addEventListener("submit", function(evt) {
      evt.preventDefault()
      let userInput =  evt.target["new-task-description"].value 
      //adding it to the DOM so we can SEE it! 
      let blankListItem = document.createElement("li")
      
      blankListItem.innerText = userInput
      myToDos.append(blankListItem)
      let blankButton = document.createElement("button")
      blankButton.innerText = "x"
      blankListItem.append(blankButton)
      myToDos.append(blankListItem)
      blankButton.addEventListener("click", function(evt){
        blankListItem.remove()
      })
    })
    let removeAllButton = document.createElement("button")
    removeAllButton.innerText = "DELETE ALL"
    myToDos.append(removeAllButton)
    removeAllButton.addEventListener("click", function(evt){
      myToDos.innerHTML = ""
    })
  });