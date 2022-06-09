/* eslint disable no-plusplus */

import './styles.css';

const todoList = document.querySelector('.todos-list');

const todoArray = [
  {
    description: 'Watch Champions league final',
    completed: false,
    index: 0,
  },
  {
    description: 'Go to Gym by 5:30pm',
    completed: false,
    index: 1,
  },
  {
    description: 'Read more on Javascript',
    completed: false,
    index: 2,
  },
  {
    description: 'Eat and Sleep',
    completed: false,
    index: 3,
  },
];

const addToDo = () => {
  todoList.innerHTML = '';
  for (let i = 0; i < todoArray.length; i++) {
    todoList.innerHTML += `
      <div class="todos-content">
        <div class="todos">
          <input type="checkbox" name="" id="">
          <p>${todoArray[i].description}</p>
        </div>
        <div class="right">
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>
  `;
  }
};

addToDo();
