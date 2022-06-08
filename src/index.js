import "./styles.css";

const todoList = document.querySelector('.todos-list');

const listArray = [
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
    description: 'Read more about Javascript',
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
  list.innerHTML = '';
  for (let i = 0; i < listArray.length; i++) {
    list.innerHTML += `
      <div class="list-content">
        <div class="left">
          <input type="checkbox" name="" id="">
          <p>${listArray[i].description}</p>
        </div>
        <div class="right">
          <i class="fa fa-ellipsis-v"></i>
        </div>
      </div>
  `;
  }
};

addToDo();
