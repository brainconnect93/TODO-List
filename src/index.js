import './styles.css';
import ToDoList from './modules/addRemove.js';

const taskstore = new ToDoList();

const textInput = document.querySelector('#add-items');

textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && textInput.value) {
    e.preventDefault();
    taskstore.addTask(textInput.value);
    textInput.value = null;
  }
});

window.addEventListener('load', taskstore.displayTodos);
