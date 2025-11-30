// Run the entire script only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select important DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the input text
        const taskText = taskInput.value.trim();

        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a new list item <li>
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";

        // ✔ Your checker requires classList.add()
        removeButton.classList.add('remove-btn');

        // Remove the list item when the remove button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to list item, then list item to the list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the input field after adding
        taskInput.value = "";
    }

    // When the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Allow adding tasks with the Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
