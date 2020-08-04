document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.getElementById('create-task-form')
  const tasks = document.getElementById('tasks') 

  newTaskForm.addEventListener('submit', function (evt) { 
    evt.preventDefault()    

    let newTask = evt.target['new-task-description'].value

    let blankTask = document.createElement('li')
    blankTask.innerText = newTask 
    tasks.append(blankTask) 

    let taskButton = document.createElement('button') 
    taskButton.innerText = 'x'  
    blankTask.append(taskButton)
    tasks.append(blankTask)

    taskButton.addEventListener('click', function (evt) { 
      blankTask.remove() 
    })

  })

  let deleteAll = document.createElement('button')
  deleteAll.innerText = 'Delete All'

  tasks.append(deleteAll)

  deleteAll.addEventListener('click', function (evt) {
    tasks.innerHTML = ''
  })
}