const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="cancelTask(this)">Cancel</button>
    `;
    listContainer.appendChild(li);
    inputBox.value = ''; // Clear the input box after adding the task
}

function completeTask(button) {
    const li = button.parentNode;
    li.classList.toggle("checked");
}

function cancelTask(button) {
    const li = button.parentNode;
    li.remove();
}
