const input = document.querySelector("#task-input");
const addBtn = document.querySelector(".btn");
const taskList = document.querySelector("ul");
const deleteButton = document.querySelector(".delete");

addBtn.addEventListener("click", () => {
  const text = input.value;
  if (text !== "" && text !== null) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `${text} <button class="delete">Delete</button>`;
    taskList.appendChild(newTask);
    input.value = "";

    
    newTask.querySelector(".delete").addEventListener("click", () => {
      newTask.remove();
    });
  }
});
