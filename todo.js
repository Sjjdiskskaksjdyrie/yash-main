function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(button) {
    const li = button.parentElement;
    const taskText = li.firstChild.textContent;
    const updatedTask = prompt("Edit the task:", taskText);

    if (updatedTask !== null) {
        li.firstChild.textContent = updatedTask;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
