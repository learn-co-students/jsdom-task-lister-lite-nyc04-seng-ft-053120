document.addEventListener("DOMContentLoaded", () => {
  // your code here

});

const taskUl = document.querySelector("#tasks") //find the ul or area you are trying to submit information
const taskForm = document.querySelector("#create-task-form") //find form in HTML to link this js log to it 

function submitNewTask(string_argument) { // create function that will submit the new information
   let emptyLi = document.createElement('li') //create an empty space
   emptyLi.innerText = string_argument // inner text of empty space is the argument

   const blankButton = document.createElement('button')

   emptyLi.append(blankButton)
   taskUl.append(emptyLi) // after performing logic to submit info append to the area you are submitting to

   blankButton.addEventListener ("click", function(evt) {
    emptyLi.remove()
   })
 
}


taskForm.addEventListener("submit", function(evt) { // create event listener on form that has even and a callback
  let newTask = evt.target // target the specific event of creating or submit new object
  evt.preventDefault() // prevents the default of refreshing that submit has
  let inputElement = newTask["new-task-description"] // create new variable that is new event 'value'
  let theThingTheUserTyped = inputElement.value // extract the actual value of the new event that was create the thing the user typed

  submitNewTask(theThingTheUserTyped) // pass that value as an argument to the function that will append to the DOM
})






