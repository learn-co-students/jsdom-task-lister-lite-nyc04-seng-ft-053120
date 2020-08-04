
 const main = document.querySelector("#main-content")
 console.log(main)
 const taskForm  = document.querySelector("#create-task-form")
 const taskList = document.querySelector("#tasks")


taskForm.addEventListener("submit",function(e)  {
  // your code here
  e.preventDefault()

  const newTask = document.querySelector("#new-task-description").value
      taskList.innerHtml += `<li> ${newTask}
      
           <button>x for delete</button>
      
      </li>`
  //  const taskItem = document.createElement("li")
  //  taskItem.innerText = newTask
  //  taskList.appendChild(taskItem)
   taskForm.reset()
});

taskList.addEventListener("click",function(e) {

 console.log(e.target)

})