
const addtask=()=>{
    const inputElement = document.getElementById("input");
    const taskValue = inputElement.value;
    console.log(taskValue);
    
          // Create a new list item for the task
          const taskItem = document.createElement("li");
          taskItem.textContent = taskValue;
  
}