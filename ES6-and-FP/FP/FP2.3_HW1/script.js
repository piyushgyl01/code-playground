const tasks = [
    { id: 1, title: "Task 1", status: "To-Do" },
    { id: 2, title: "Task 2", status: "In Progress" },
    { id: 3, title: "Task 3", status: "Completed" },
    { id: 4, title: "Task 4", status: "To-Do" }
];
  
const statusFilter = document.querySelector("#statusFilter");
const todoList = document.querySelector("#todoList");

const renderTask = (status) => {
    let selectedOpt;
    if (status === "To-Do") {
        selectedOpt = tasks.filter((task) => task.status === "To-Do");
    } else if (status === "In Progress") {
        selectedOpt = tasks.filter((task) => task.status === "In Progress");
    } else if (status === "Completed") {
        selectedOpt = tasks.filter((task) => task.status === "Completed");
    } else {
        selectedOpt = tasks;
    }

    const todoListHTML = selectedOpt.map((task) => `
        <li>
            <strong>ID:</strong> ${task.id} <br>
            <strong>Title:</strong> ${task.title} <br>
            <strong>Status:</strong> ${task.status} <br>
        </li>
        <hr>
    `)
    todoList.innerHTML = todoListHTML.join("");
};

renderTask("All");

statusFilter.addEventListener("change", function() {
    renderTask(statusFilter.value);
});