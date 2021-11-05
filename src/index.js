import _ from 'lodash';
import './style.css';

// const openNavButton = document.getElementById('btn-open-nav');
// openNavButton.addEventListener('click', openNav);

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

// let myTasks = JSON.parse(window.localStorage.getItem("localStorageTasks"));

function addTask() {
  const inputAddTask = document.getElementById('input-add-task');
  console.log(inputAddTask.value);
}

function openAddTaskPopup() {
  taskPopup.classList.add('active');
  btnOpenAddTaskPopup.classList.add('hide');
}

function closeAddTaskPopup() {
  taskPopup.classList.remove('active');
  btnOpenAddTaskPopup.classList.remove('hide');
}

// function addTaskToLocalStorage(task) {
//   if (myTasks != null){
//     myTasks.push(book);
//     window.localStorage.setItem("localStorageTasks", JSON.stringify(myTasks));
//   } else {
//     myTasks = [];
//     myTasks.push(book);
//     window.localStorage.setItem("localStorageTasks", JSON.stringify(myTasks));
//   }
//   console.log(myTasks);
// }