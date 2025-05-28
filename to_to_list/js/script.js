document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("to-do-list");
  const completedList = document.getElementById("completed-list");

  function createTodoItem(text, isCompleted = false) {
    const li = document.createElement("li");
    li.classList.add("li-to-do");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑";
    deleteButton.title = "Elimina attività";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(span);

    if (isCompleted) {
      li.classList.add("completed");
      li.appendChild(deleteButton);
    } else {
      const completeButton = document.createElement("button");
      completeButton.innerHTML = "&check;";
      completeButton.title = "Completa attività";
      completeButton.addEventListener("click", () => {
        li.classList.add("completed");
        completeButton.remove();
        completedList.appendChild(li);
      });
      li.appendChild(completeButton);
      li.appendChild(deleteButton);
    }

    return li;
  }

  addButton.addEventListener("click", () => {
    const text = todoInput.value.trim();
    if (text !== "") {
      const newItem = createTodoItem(text);
      todoList.appendChild(newItem);
      todoInput.value = "";
    }
  });

  todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // Gestione dell'elemento di esempio già presente
  const existingItem = document.querySelector("#to-do-list .li-to-do");
  if (existingItem) {
    const span = existingItem.querySelector("span");
    const text = span.textContent;

    // Rimuove l'elemento esistente
    existingItem.remove();

    // Crea un nuovo elemento con le funzionalità aggiornate
    const newItem = createTodoItem(text);
    todoList.appendChild(newItem);
  }
});
