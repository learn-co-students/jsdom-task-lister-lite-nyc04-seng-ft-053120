document.addEventListener("DOMContentLoaded", (evt) => {
  // your code here

  let list = document.querySelector("#tasks")
  let taskForm = document.querySelector("#create-task-form")

  taskForm.addEventListener("submit", function(form){

    //stops the post request
    form.preventDefault()

    //get the value of what user typed
    let userInput = form.target["new-task-description"].value
    //let userInput = form.target.new-task-description.value

    //creates a blank li
    let blankListItem = document.createElement("li")

    //saves user input to the inner text of li element: <li>userInput<li>
    blankListItem.innerText = userInput
  
    //appends blanklistitem to list
    list.append(blankListItem)

    //creating a blank button 
    let blankButton = document.createElement("button")
    //inner-text = "x"
    blankButton.innerText = "x"
    //add the button to the task that allows us to delete the item
    blankListItem.append(blankButton)
    //when a user clicks the button it removes the task.
    blankButton.addEventListener("click", function(evt){
    evt.preventDefault()
    blankListItem.remove()
    })

  })

})
