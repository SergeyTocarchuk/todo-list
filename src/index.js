import _ from 'lodash';
import './style.css';
// import Task from './task';

const openNavButton = document.getElementById('btn-open-nav');
openNavButton.addEventListener('click', displayTasksList);

const inboxButton = document.getElementById('show-list');
inboxButton.addEventListener('click', displayTasksList);

const addTaskNav = document.getElementById('nav-add-task');
addTaskNav.addEventListener('click', openAddTaskPopup);

// function openNav(){
//   openNavButton.classList.toggle('active');
// }

const btnOpenAddTaskPopup = document.getElementById('button-add-task-popup');
btnOpenAddTaskPopup.addEventListener('click', openAddTaskPopup);

const taskPopup = document.getElementById('add-task-popup');

// Task popup buttons

const btnAddTask = document.getElementById('button-add-task');
btnAddTask.addEventListener('click', addTask);

const btnCancelTask = document.getElementById('button-cancel-task-popup');
btnCancelTask.addEventListener('click', closeAddTaskPopup);

function addTask() {
  const inputAddTask = document.getElementById('input-add-task');
  addTaskToLocalStorage(inputAddTask.value);
  closeAddTaskPopup();
}

function openAddTaskPopup() {
  taskPopup.classList.add('active');
  btnOpenAddTaskPopup.classList.add('hide');
}

function closeAddTaskPopup() {
  taskPopup.classList.remove('active');
  btnOpenAddTaskPopup.classList.remove('hide');
}

let myTasks = JSON.parse(window.localStorage.getItem("localStorageTasks"));

function addTaskToLocalStorage(task) {
  if (myTasks != null){
    myTasks.push(task);
    window.localStorage.setItem("localStorageTasks", JSON.stringify(myTasks));
  } else {
    myTasks = [];
    myTasks.push(task);
    window.localStorage.setItem("localStorageTasks", JSON.stringify(myTasks));
  }
  displayTasksList();
  console.log(myTasks);
}

function displayTasksList() {  
  for( let i = 0; i < myTasks.length; i++ ){
    console.log(myTasks[i]);
    const tasksList = document.getElementById('task-list');
    tasksList.innerHTML = 
        `<span>${myTasks[i]}</span>
      <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${myTasks[i]}</p>
          <input type="text" class="input-task-name" data-input-task-name>
        </div>
        <div class="right-task-panel">
          <p class="due-date" id="due-date">${myTasks[i+1]}</p>
          <input type="date" class="input-due-date" data-input-due-date>
          <i class="fas fa-times"></i>
        </div>
      </button>
    `
  }
}