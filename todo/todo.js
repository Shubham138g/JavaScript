const taskList = document.getElementById("taskList");

function addTask() {
    const inputElement = document.getElementById("input");
    const taskValue = inputElement.value;

    if (taskValue.trim() !== "") {
        const taskList = document.getElementById("taskList");

        const taskItem = document.createElement("li");
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delBtn");
        deleteButton.onclick = () => taskItem.remove();

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        // taskList.appendChild(taskItem);
        taskList.insertBefore(taskItem, taskList.firstChild);

        inputElement.value = ""; // Clear the input field
    } else {
        alert("Please enter a task.");
    }
}
