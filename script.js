// script.js
function init() {
    function addTask(task) {
        // Agregar la nueva tarea al array tasks
        tasks.push(task);
        refresh();
    }

    function updateTask(task) {
        const index = tasks.findIndex((t) => t.title === task.title);
        if (index !== -1) {
            tasks[index] = { ...task };
            refresh();
        }
    }

    function deleteTask(title) {
        const index = tasks.findIndex((task) => task.title === title);
        if (index !== -1) {
            tasks.splice(index, 1);
            refresh();
        }
    }

    function editTask(title) {
        const task = tasks.find((task) => task.title === title);
        if (task) {
            document.getElementById("task-title").value = task.title;
            document.getElementById("task-description").value = task.description;
        }
    }

    // Define las funciones globalmente para que puedan ser llamadas desde el HTML
    window.deleteTask = deleteTask;
    window.editTask = editTask;

    function refresh() {
        renderTable(tasks);
    }

    renderForm((task) => {
        const existingTask = tasks.find((t) => t.title === task.title);
        if (existingTask) {
            updateTask(task);
        } else {
            addTask(task);
        }
    });

    refresh();
}

// Initialize the CRUD app
init();
