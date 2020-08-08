document.addEventListener("DOMContentLoaded", () => {
  let createNewTask = document.querySelector('#create-task-form')
  let slapItOnTheDom = document.querySelector('#tasks')
  

  createNewTask.addEventListener('submit', (evt) =>{
    evt.preventDefault()
    
    createLiElement(evt)

  })

  function createLiElement(evt) {
    let userInput = (evt.target['new-task-description'].value)
    let blankLi = document.createElement('li')
    blankLi.innerText = userInput

    evt.target['new-task-description'].value =""
    slapItOnTheDom.append(blankLi)
    blankLi.addEventListener('click', (event) => {
      blankLi.remove()
    });
    
  }
});