
  // your code here
  // get access to the outer form 
const taskListerForm = document.querySelector("#create-task-form")
const ulTasksContainer = document.querySelector("#tasks")
// create an eventListener for the from
taskListerForm.addEventListener("submit", function(e) {
  // now we do something to the "e"
  e.preventDefault()
  const userInput = e.target["new-task-description"].value
  // we have to add to the dom the users input
  // get access to the inner box/tag
  const newli = document.createElement("li")
  // this updates the newli container
    newli.innerText = userInput
  // now we want to append this creation to the dom == visibility
  ulTasksContainer.append(newli)

})
