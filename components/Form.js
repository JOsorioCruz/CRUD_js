// components/Form.js
function renderForm(onSubmit) {
    const formContainer = document.getElementById("form-container");
    formContainer.innerHTML = `
        <form id="task-form">
            <input type="hidden" id="task-id" />
            <input type="text" id="task-title" placeholder="Task Title" required />
            <input type="text" id="task-description" placeholder="Task Description" required />
            <button type="submit">Save Task</button>
        </form>
    `;

    document.getElementById("task-form").onsubmit = function (event) {
        event.preventDefault();
        const id = document.getElementById("task-id").value;
        const title = document.getElementById("task-title").value;
        const description = document.getElementById("task-description").value;
        onSubmit({ id, title, description });
        this.reset();
    };
}
