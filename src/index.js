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
const tasksList = document.getElementById('task-list');

// Task popup buttons

const btnAddTask = document.getElementById('button-add-task');
btnAddTask.addEventListener('click', addTask);

const inputAddTask = document.getElementById('input-add-task');
inputAddTask.addEventListener('keypress', handleAddTaskInput);

function handleAddTaskInput(e) {
  if (e.key === 'Enter') addTask();
}

const btnCancelTask = document.getElementById('button-cancel-task-popup');
btnCancelTask.addEventListener('click', closeAddTaskPopup);

function addTask() {
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
}

function displayTasksList() {
  clearCurrentDisplay();
  const showTasksList = document.createElement('ul');
  if (myTasks.length > 0) {
    for( let i = 0; i < myTasks.length; i++ ){
      let listItem = document.createElement('li');
      listItem.innerHTML = `
        <div class="task-panel">
          <button class="mark-as-done" data-id="${i}">
            <i class="far fa-circle"></i>
            <p class="task-item">${myTasks[i]}</p>
            <i class="fas fa-archive"></i>
          </button>
          <input type="text" id="input-task-name" class="input-task-name">
        </div>`
      showTasksList.appendChild(listItem);
    }
    tasksList.appendChild(showTasksList);
    initButtons();
  } else {
    tasksList.innerHTML = `<span>You have no tasks yet</span>`
  }
}

function clearCurrentDisplay() {
  let currentDisplay = tasksList.lastElementChild;
  while (currentDisplay) {
    tasksList.removeChild(currentDisplay);
    currentDisplay = tasksList.lastElementChild;
  }
}

function initButtons() {
  const listTaskButtons = document.querySelectorAll('.mark-as-done');
  Array.from(listTaskButtons).forEach(function (listTaskBtn) {
    listTaskBtn.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-archive')) {
        removeTask(listTaskBtn.dataset.id);
      }
      if (e.target.classList.contains('fa-circle')) {
        toggleTaskStatus(listTaskBtn.dataset.id);
      }
    })
  })
}

function removeTask(index) {
  myTasks.splice(index, 1);
  if (myTasks.length > 0) {
    displayTasksList();
  } else {
    tasksList.innerHTML = "";
  }
}

function toggleTaskStatus(index) {
  const markAsReadButtons = document.querySelectorAll('.mark-as-done');
  markAsReadButtons[index].children[1].classList.toggle('task-done');
}