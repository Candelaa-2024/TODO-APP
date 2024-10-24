// Add task function
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create complete and delete buttons
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => li.classList.toggle('completed');
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    // Append buttons to the list item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Append the list item to the to-do list
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}
