console.log("Hello");

const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");
const addTodoButton = document.getElementById("addTodo");

function updateTodoList() {
  todoList.innerHTML = "";

  tasks.forEach((text, index) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    li.style.height = "50px";

    const span = document.createElement("span");
    span.textContent = text;

    const trach_icon = document.createElement("img");
    trach_icon.src = "./image/trach_icon.png";
    trach_icon.style.width = "20px";
    trach_icon.style.height = "20px";

    const plus_icon = document.createElement("img");
    plus_icon.src = "./image/plus_icon.png";
    plus_icon.style.height = "20px";
    plus_icon.style.width = "20px";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-sm", "ml-2");
    deleteButton.style.backgroundColor = "#8540f5";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", () => deleteClass(index));

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-sm", "ml-2");
    editButton.style.backgroundColor = "#8540f5";
    editButton.style.color = "white";
    editButton.addEventListener("click", () => editClass(index));

    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "10px";

    editButton.appendChild(plus_icon);
    deleteButton.appendChild(trach_icon);
    div.appendChild(editButton);
    div.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(div);

    todoList.appendChild(li);
  });
}

let tasks = [];

addTodoButton.addEventListener("click", () => {
  const task = newTodoInput.value.trim();
  if (task) {
    tasks.push(task);
    newTodoInput.value = "";
  }
  updateTodoList();
});

function deleteClass(index) {
  tasks.splice(index, 1);
  updateTodoList();
}

function editClass(index) {
  const newTask = prompt("Write your task: ", tasks[index]);
  if ((newTask !== null) & (newTask.trim() !== "")) {
    tasks[index] = newTask;
    updateTodoList();
  }
}

updateTodoList();
