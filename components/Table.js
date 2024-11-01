// components/Table.js
function renderTable(tasks) {
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = `
        <table border="1">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            ${tasks
        .map(
            (task) => `
                <tr>
                    <td>${task.title}</td>
                    <td>${task.description}</td>
                    <td>
                        <button onclick="editTask('${task.title}')">Edit</button>
                        <button onclick="deleteTask('${task.title}')">Delete</button>
                    </td>
                </tr>`
        )
        .join("")}
        </table>
    `;
}
