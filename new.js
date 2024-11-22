// Add event listeners after the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.querySelector(".todo-input");
    const todoButton = document.querySelector(".todo-btn");
    const todoList = document.querySelector(".todo-list");
    const themeToggle = document.querySelector("#nav h3 i");

    // Add Task
    todoButton.addEventListener("click", (e) => {
        e.preventDefault();

        // Prevent adding empty tasks
        if (todoInput.value.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // Create a todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo", "light-todo");

        // Create list item
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);

        // Add Check Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fa fa-check"></i>';
        completedButton.classList.add("check-btn");
        todoDiv.appendChild(completedButton);

        // Add Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.classList.add("delete-btn");
        todoDiv.appendChild(deleteButton);

        // Append to list
        todoList.appendChild(todoDiv);

        // Clear the input field
        todoInput.value = "";
    });

    // Handle Delete and Complete Actions
    todoList.addEventListener("click", (e) => {
        const item = e.target;

        // Delete task
        if (item.classList.contains("delete-btn")) {
            const todo = item.parentElement;
            todo.classList.add("fall");
            todo.addEventListener("transitionend", () => {
                todo.remove();
            });
        }

        // Mark task as completed
        if (item.classList.contains("check-btn")) {
            const todo = item.parentElement;
            todo.classList.toggle("completed");
        }
    });

    // Toggle Dark/Light Theme
    themeToggle.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        const todos = document.querySelectorAll(".todo");
        themeToggle.classList.toggle("fa-sun-o"); // Change icon to sun

        // Update todo list colors
        todos.forEach((todo) => {
            if (isDarkMode) {
                todo.classList.remove("light-todo");
                todo.classList.add("standard-todo");
            } else {
                todo.classList.remove("standard-todo");
                todo.classList.add("light-todo");
            }
        });
    });
});
