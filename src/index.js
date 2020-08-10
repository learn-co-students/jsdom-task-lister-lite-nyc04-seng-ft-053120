let taskButton = document.querySelector("#create-task-form")
let toDoUl = document.querySelector("#tasks")

document.addEventListener("DOMContentLoaded", () => {
  // your code here
taskButton.addEventListener("submit", (evt) =>{
  evt.preventDefault()


  let listLi = document.createElement("li")
  let userSubmittedTask = evt.target["new-task-description"].value
  listLi.innerHTML = userSubmittedTask

  let deleteButton = document.createElement("button")
  deleteButton.classList = "delete"
  deleteButton.innerHTML = "remove"
  listLi.append(deleteButton)

  toDoUl.append(listLi)

  deleteButton.addEventListener("click" , (evt) => {
    listLi.remove()
  })
})


});
