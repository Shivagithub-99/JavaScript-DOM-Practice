const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector("#task-list");

addBtn.addEventListener("click", function(){
    const task = input.value;
    input.value = "";
    if(task === "") return;
    const eachTask = document.createElement("li");
    const taskName = document.createElement("p");
    taskName.innerText = `${task}`;
    const delBtn = document.createElement("button");
    delBtn.innerText = "Remove";

    eachTask.classList.add("li");
    taskName.classList.add("task-name");
    delBtn.classList.add("remove-btn");

    eachTask.appendChild(taskName);
    eachTask.appendChild(delBtn);

    taskList.append(eachTask);

    delBtn.addEventListener("click", function(){
        eachTask.remove();
    });

    eachTask.addEventListener("dblclick", function(){
        eachTask.classList.toggle("completed");
    });

});