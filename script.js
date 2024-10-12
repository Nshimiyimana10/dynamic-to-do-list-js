const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

document.addEventListener("DOMContentLoaded", function(){
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event){
        if(event.key ==="Enter"){
             addTask();
        }
        addTask();
    })
})

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
      alert("Please enter a task!")
    }
    else{
        const li = document.createElement("li");
        li.textContent = taskText;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.onClick = taskList.removeChild(li);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}