const API_URL = "https://jsonplaceholder.typicode.com/todos";
let tasks = []; // Local array to store tasks

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

async function loadTasks() {
    try {
        const response = await fetch(`${API_URL}?_limit=5`); // Get 5 tasks
        tasks = await response.json(); // Store tasks in local array
        renderTasks();
    } catch (error) {
        console.error("Error loading tasks:", error);
    }
}

// Render tasks to UI
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing list

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task.title} 
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add new task to API & UI
async function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: taskText, completed: false })
        });

        const newTask = await response.json();
        newTask.id = tasks.length + 1; // Fake ID since JSONPlaceholder doesn't store new tasks
        tasks.push(newTask); // Add to local tasks
        taskInput.value = ""; // Clear input
        renderTasks(); // Refresh UI
    } catch (error) {
        console.error("Error adding task:", error);
    }
}

// Delete task from API & UI
async function deleteTask(id) {
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });

        // Remove from local array since API doesn't persist deletes
        tasks = tasks.filter(task => task.id !== id);
        renderTasks(); // Refresh UI
    } catch (error) {
        console.error("Error deleting task:", error);
    }
}
