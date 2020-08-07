 document.addEventListener("DOMContentLoaded", () => {
     // your code here
     const main = document.querySelector("#main-content");
     const taskForm = document.querySelector("#create-task-form");
     const taskList = document.querySelector("#tasks");
     taskForm.addEventListener("submit", function(e) {
         e.preventDefault();
         let newTask = document.querySelector("#new-task-description");
         let newT = newTask.value;
         taskList.innerHTML += `<li> ${newT}
     <button data-action = "delete"> X </button> 
     </li>`

         taskForm.reset()
     })
     taskList.addEventListener("click", function(e) {
         console.log(e.target)
         if (e.target.dataset.action === "delete") {
             e.target.parentElement.remove()
         }
     })
 })