document.addEventListener("DOMContentLoaded", () => {

  let taskForm = document.querySelector('#create-task-form')
  let taskUl = document.querySelector("#tasks")  
  let submit = document.querySelector('input[type="submit"]')

  // create priority dropdown
  let priority = document.createElement("select")
  priority.name = "priority-list"

  let options = ["high priority", "medium priority", "low priority"]
  let keys = ["high", "medium", "low"]

  options.forEach(function(element, index){
    priority[index] = new Option(element, keys[index]);
  })

  taskForm.insertBefore(priority, submit)

  // create duration input and label
  let duration = document.createElement('input')
  duration.id = "new-task-duration"
  let durationLabel = document.createElement("label")
  durationLabel.innerText = "Duration:"

  taskForm.insertBefore(duration, submit)
  taskForm.insertBefore(durationLabel, duration)

  // create sort button for UL
  let sortButton = document.createElement('button')
  sortButton.innerText = "sort"
  taskUl.append(sortButton)

  // make user input into LIs and add remove button
  function taskIntoHTML(string){
    // create blank LIs
    let blankLi = document.createElement("li")
    blankLi.innerText = string

    // create remove button
    let removeButton = document.createElement('button')
    removeButton.innerText = "x"
    
    blankLi.append(removeButton)
    taskUl.append(blankLi)

    removeButton.addEventListener("click", function(evt){
      blankLi.remove()
    })

    // create edit
    let editButton = document.createElement("button")
    editButton.innerText = "Edit Task"
    editButton.id = "edit"
    
    blankLi.append(editButton)

    // edit a task
    editButton.addEventListener("click", (evt) => {
      let inputToBeEdited = editButton.parentElement.firstChild.textContent

      let editForm = document.createElement("form")
      editForm.id = "edit-form"

      editButton.parentElement.append(editForm)
  
      let inputBox = document.createElement("input")
      inputBox.value = inputToBeEdited
      inputBox.id = "edited-input"
  
      editForm.append(inputBox)

      let newSubmit = document.createElement("button")
      newSubmit.innerText = "Submit Change"

      editForm.append(newSubmit)

      editForm.addEventListener("submit", (evt) => {
        evt.preventDefault()

        evt.target.parentElement.firstChild.textContent = inputBox.value 

        evt.target.remove()
      })

    })

    return blankLi
  }

  // grab user input for task, duration, and priority; assign color to task
  taskForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let userTask = evt.target["new-task-description"].value
    let taskDuration = evt.target["new-task-duration"].value
    let priorityElement = evt.target["priority-list"]

    let userInput = `${userTask}` + ` for ${taskDuration}`

    let newTask = taskIntoHTML(userInput)

    let colors = {"high": "red", "medium": "orange", "low": "green"}

    newTask.style.color = colors[priorityElement.value]

    newTask.className = priorityElement.value
    
    evt.target.reset()
  })


  // sort tasks by priority
  sortButton.addEventListener("click", function(evt){
    let newTaskList = taskUl.cloneNode(false)

    let nodes = document.querySelectorAll('li')
    let arr = []
    for(let i = 0; i < nodes.length; i++) { 
      if(nodes[i].nodeName === "LI") {
        arr.push(nodes[i]) 
      }
    }

    arr.sort((a,b) => {
      if (keys.indexOf(a.className) < keys.indexOf(b.className)) {
        return -1
      }
      return 1
    })

    for(let i = 0; i < arr.length; i++) {
      newTaskList.append(arr[i])
      taskUl.parentNode.append(newTaskList)
    }
  })

});
