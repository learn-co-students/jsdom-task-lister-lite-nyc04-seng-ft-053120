document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form")
  //.querySelector("#create-task-form")
  const myToDos = document.getElementById("tasks")

  taskForm.addEventListener("submit", function(event){
    event.preventDefault()
    let userInput = event.target["new-task-description"].value 
    //we will create a helper method that will create an li element for us 
    createLiElement(userInput)
  })

  //helper method      
  function createLiElement(userInput){
    let blankListElement = document.createElement("li")
    blankListElement.innerText = userInput
    myToDos.append(blankListElement)
    return blankListElement
  }




  
}); //end of DOMContentLoaded

