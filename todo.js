let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

document.addEventListener("DOMContentLoaded", loadTasks);

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let taskValue = inputs.value;
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${taskValue} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        
        saveTask(taskValue);
        inputs.value = "";1
        
        newEle.querySelector("i").addEventListener("click", function () {
            removeTask(newEle, taskValue);
        });
    }
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${task} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        
        newEle.querySelector("i").addEventListener("click", function () {
            removeTask(newEle, task);
        });
    });
}

function removeTask(element, task) {
    element.remove();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
