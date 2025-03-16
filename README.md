# HiringHoodTask4
# Todo Application with API Integration

This is a simple **Todo App** built using **HTML, CSS, and JavaScript**, with API integration using **JSONPlaceholder** for task management. The application allows users to fetch, add, and delete tasks dynamically.

## 🚀 Features
- Fetch tasks from API (GET request)
- Add new tasks (POST request)
- Delete tasks (DELETE request)
- Responsive design for different devices

## 🛠 Technologies Used
- **HTML** - Structure of the app
- **CSS** - Styling and responsiveness
- **JavaScript** - Application logic
- **Fetch API** - Handling API requests
- **JSONPlaceholder** - Mock API for testing

## 📂 Project Structure
```
Todo-App/
│── index.html       # Main HTML file
│── styles.css       # Styling file
│── script.js        # JavaScript logic
│── README.md        # Documentation
```

## 📥 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. **Open `index.html` in a browser**
   - No additional setup is required, as the app directly interacts with the JSONPlaceholder API.

## 🔧 API Integration
The app uses `https://jsonplaceholder.typicode.com/todos` for task management.

### ✅ Fetch Tasks (GET Request)
- Fetches a list of tasks (limited to 5 for testing)
```js
fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
```

### ➕ Add Task (POST Request)
- Adds a new task to the API
```js
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: taskText, completed: false })
})
```

### ❌ Delete Task (DELETE Request)
- Deletes a task from the API
```js
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, { method: "DELETE" })
```

## 🎨 UI Preview
The Todo App has a simple and clean UI with an input field for adding tasks, a list to display tasks, and delete buttons.

## 🔥 Future Enhancements
- ✅ Edit task functionality (PUT API)
- ✅ Task completion toggle (PATCH API)
- ✅ Database integration for real persistence

## 🤝 Contribution
Feel free to contribute! Fork the repo, make your changes, and submit a PR.

## 📜 License
This project is licensed under the MIT License.

