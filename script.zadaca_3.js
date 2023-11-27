let createBtn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");

function onClickCreateTask() {
  let taskList = document.getElementById("taskList");

  if (inputTask.value != "") {
    let listElement = document.createElement("li");
    let spanElement = document.createElement("span");
    spanElement.textContent = inputTask.value;

    let completeBtn = document.createElement("button");
    //completeBtn.textContent = "Completed";//
    completeBtn.innerHTML = '<i class"fa-solid fa-check"></i>';
    completeBtn.addEventListener("click", onClickComplete);

    let deleteBtn = document.createElement("button");
    //deleteBtn.textContent = "Deleted";//
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark~"></i>';
    deleteBtn.addEventListener("click", onClickDelete);

    listElement.appendChild(spanElement);
    listElement.appendChild(completeBtn);
    listElement.appendChild(deleteBtn);
    taskList.appendChild(listElement);
  }

  inputTask.value = "";
}
createBtn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement; //ke go najde negoviot parent list tag so klikanje
  listElement.classlist.toggle("completed"); //proveruvame dali postoi takva klasa, ako ne postoi da se kreira
}

function onClickDelete(event) {
  let element = event.target.closest("li");
  element.remove(element);
}
