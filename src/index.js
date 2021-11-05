import _ from 'lodash';
import './style.css';

const openNavButton = document.getElementById('btn-open-nav');
openNavButton.addEventListener('click', openNav);

function openNav(){
  openNavButton.classList.toggle('active');
}

const btnAddTask = document.getElementById('button-add-task');
btnAddTask.addEventListener('click', createTask);



function createTask(){
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = `
  <div class="add-task-popup" id="add-task-popup">
    <input
      class="input-add-task-popup"
      id="input-add-task-popup"
      type="text"
    />
    <div class="add-task-popup-buttons">
      <button class="button-add-task-popup" id="button-add-task-popup">
        Add
      </button>
      <button
        class="button-cancel-task"
        id="button-cancel-task"
        >
        Cancel
      </button>
    </div>
  </div>`
  openAddTaskPopup();

  const btnCancelTask = document.getElementById('button-cancel-task');
  btnCancelTask.addEventListener('click', closeAddTaskPopup);
}

function openAddTaskPopup() {
  const addTaskPopup = document.getElementById('add-task-popup');
  addTaskPopup.classList.add('active');

  btnAddTask.classList.add('hide');
}

function closeAddTaskPopup() {
  const addTaskPopup = document.getElementById('add-task-popup');
  addTaskPopup.classList.remove('active');
  
  btnAddTask.classList.remove('hide');
}