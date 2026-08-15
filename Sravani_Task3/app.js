let tasks = [];

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

window.onload = function () {
  const data = localStorage.getItem("tasks");
  if (data) tasks = JSON.parse(data);
  renderTasks();
};

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const task = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString(),
    completedAt: null,
  };

  tasks.push(task);
  input.value = "";
  renderTasks();
});

function renderTasks() {
  pendingList.innerHTML = "";
  completedList.innerHTML = "";

  let pending = 0;
  let completed = 0;

  tasks.forEach((task) => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
      completed++;
    } else {
      pending++;
    }

    li.innerHTML = `
      <span>${task.text}</span>
      <small>${task.completed ? task.completedAt : task.createdAt}</small>
      <div>
        <button onclick="toggleTask(${task.id})">✔</button>
        <button onclick="editTask(${task.id})">✏</button>
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;

    if (task.completed) {
      completedList.appendChild(li);
    } else {
      pendingList.appendChild(li);
    }
  });

 
  if (pending === 0) {
    pendingList.innerHTML = `<p class="empty">No pending tasks 🎉</p>`;
  }
  if (completed === 0) {
    completedList.innerHTML = `<p class="empty">No completed tasks yet</p>`;
  }

  pendingCount.innerText = `${pending} Pending`;
  completedCount.innerText = `${completed} Completed`;

  saveTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
      task.completedAt = task.completed ? new Date().toLocaleString() : null;
    }
    return task;
  });
  renderTasks();
}

function editTask(id) {
  const newText = prompt("Edit your task:");
  if (!newText) return;

  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.text = newText;
    }
    return task;
  });

  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
